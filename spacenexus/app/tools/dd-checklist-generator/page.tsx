"use client";

import { useState } from "react";
import Link from "next/link";
import * as XLSX from "xlsx";
import { useAuth, getStoredAuth } from "../../../lib/auth-context";

const WEBSITE_ID = "0173d57b-13e0-47e8-aefc-33f65f9995fc";

const REQUEST_OTP_MUTATION = `
  mutation WebsiteRequestLoginOtp($websiteId: String!, $email: String!) {
    websiteRequestLoginOtp(websiteId: $websiteId, email: $email) {
      otpSent
      message
      email
    }
  }
`;

const VERIFY_OTP_MUTATION = `
  mutation WebsiteVerifyLoginOtp($websiteId: String!, $email: String!, $otp: String!) {
    websiteVerifyLoginOtp(websiteId: $websiteId, email: $email, otp: $otp) {
      token
      userId
      email
      firstName
      lastName
      role
      websiteId
    }
  }
`;

const freeEmailProviders = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "aol.com", "icloud.com", "mail.com", "protonmail.com", "zoho.com", "yandex.com", "gmx.com", "live.com", "msn.com", "me.com", "inbox.com", "fastmail.com", "hey.com", "tutanota.com"];

type FolderItem = {
  name: string;
  children?: FolderItem[];
};

const industries = [
  { id: "saas", name: "SaaS / Technology", icon: "💻" },
  { id: "lifesciences", name: "Life Sciences / Pharma", icon: "🧬" },
  { id: "realestate", name: "Real Estate", icon: "🏢" },
  { id: "fintech", name: "FinTech / Banking", icon: "🏦" },
  { id: "manufacturing", name: "Manufacturing", icon: "🏭" },
  { id: "energy", name: "Energy / Utilities", icon: "⚡" },
  { id: "healthcare", name: "Healthcare", icon: "🏥" },
  { id: "ecommerce", name: "E-Commerce / Retail", icon: "🛒" },
];

const transactionTypes = [
  { id: "seriesA", name: "Series A / B Funding" },
  { id: "seriesC", name: "Series C+ / Pre-IPO" },
  { id: "ma", name: "Cross-Border M&A" },
  { id: "assetSale", name: "Asset Sale" },
  { id: "ipo", name: "IPO Preparation" },
  { id: "spac", name: "SPAC Merger" },
];

const checklistData: Record<string, Record<string, FolderItem[]>> = {
  saas: {
    seriesA: [
      {
        name: "1. Corporate Formation",
        children: [
          { name: "1.1 Articles of Incorporation" },
          { name: "1.2 Bylaws / Operating Agreement" },
          { name: "1.3 Board Meeting Minutes" },
          { name: "1.4 Stockholder Agreements" },
          { name: "1.5 Cap Table" },
        ],
      },
      {
        name: "2. Financial Records",
        children: [
          { name: "2.1 Audited Financial Statements (3 years)" },
          { name: "2.2 Monthly Financial Statements" },
          { name: "2.3 Revenue Breakdown by Customer" },
          { name: "2.4 MRR / ARR Metrics" },
          { name: "2.5 Cash Flow Projections" },
        ],
      },
      {
        name: "3. Product & Technology",
        children: [
          { name: "3.1 Architecture Documentation" },
          { name: "3.2 Source Code Repository Access" },
          { name: "3.3 API Documentation" },
          { name: "3.4 Infrastructure & Hosting Details" },
          { name: "3.5 Security Certifications (SOC 2, ISO)" },
          { name: "3.6 Technical Debt Assessment" },
        ],
      },
      {
        name: "4. Customer & Revenue",
        children: [
          { name: "4.1 Customer List (Top 50)" },
          { name: "4.2 Customer Contracts" },
          { name: "4.3 Churn Analysis" },
          { name: "4.4 Net Revenue Retention Metrics" },
          { name: "4.5 Pipeline & Sales Forecast" },
        ],
      },
      {
        name: "5. Legal & Compliance",
        children: [
          { name: "5.1 IP Ownership & Patents" },
          { name: "5.2 Open Source License Audit" },
          { name: "5.3 Data Privacy Compliance (GDPR/CCPA)" },
          { name: "5.4 Pending Litigation" },
          { name: "5.5 Material Contracts" },
        ],
      },
      {
        name: "6. Team & HR",
        children: [
          { name: "6.1 Employee Census" },
          { name: "6.2 Key Employee Agreements" },
          { name: "6.3 Equity Plan Documents" },
          { name: "6.4 Advisory Board Agreements" },
        ],
      },
    ],
    ma: [
      {
        name: "1. Corporate & Legal",
        children: [
          { name: "1.1 Certificate of Incorporation" },
          { name: "1.2 All Foreign Qualifications" },
          { name: "1.3 Shareholder Agreements" },
          { name: "1.4 Board Consents & Resolutions" },
          { name: "1.5 Capitalization Table (Fully Diluted)" },
          { name: "1.6 Option Plans & Grants" },
        ],
      },
      {
        name: "2. Financial Due Diligence",
        children: [
          { name: "2.1 Audited Financials (3-5 years)" },
          { name: "2.2 Interim Financial Statements" },
          { name: "2.3 Tax Returns (3 years)" },
          { name: "2.4 Revenue by Product/Segment" },
          { name: "2.5 Working Capital Analysis" },
          { name: "2.6 Debt & Credit Agreements" },
          { name: "2.7 Insurance Policies" },
        ],
      },
      {
        name: "3. Technology & IP",
        children: [
          { name: "3.1 Software Inventory" },
          { name: "3.2 IP Registrations & Applications" },
          { name: "3.3 Third-Party Code Dependencies" },
          { name: "3.4 Data Architecture & Flows" },
          { name: "3.5 Cybersecurity Assessment" },
          { name: "3.6 Disaster Recovery Plan" },
        ],
      },
      {
        name: "4. Commercial Due Diligence",
        children: [
          { name: "4.1 Customer Contracts (Material)" },
          { name: "4.2 Supplier Agreements" },
          { name: "4.3 Competitive Analysis" },
          { name: "4.4 Market Size & Growth Data" },
          { name: "4.5 Customer Concentration Analysis" },
          { name: "4.6 Pricing Strategy Documents" },
        ],
      },
      {
        name: "5. Regulatory & Compliance",
        children: [
          { name: "5.1 Regulatory Filings" },
          { name: "5.2 Licenses & Permits" },
          { name: "5.3 GDPR/CCPA Compliance" },
          { name: "5.4 Industry-Specific Certifications" },
          { name: "5.5 Environmental Compliance" },
          { name: "5.6 Anti-Corruption/AML Policies" },
        ],
      },
      {
        name: "6. HR & Employment",
        children: [
          { name: "6.1 Employee Census & Org Chart" },
          { name: "6.2 Employment Agreements" },
          { name: "6.3 Benefits & Compensation Plans" },
          { name: "6.4 Union Agreements" },
          { name: "6.5 Pending Claims/Litigation" },
          { name: "6.6 Key Person Risk Assessment" },
        ],
      },
      {
        name: "7. Real Estate & Assets",
        children: [
          { name: "7.1 Lease Agreements" },
          { name: "7.2 Property Titles" },
          { name: "7.3 Equipment Lists" },
          { name: "7.4 Fixed Asset Register" },
        ],
      },
    ],
    assetSale: [
      {
        name: "1. Asset Inventory",
        children: [
          { name: "1.1 Tangible Assets List" },
          { name: "1.2 Intangible Assets List" },
          { name: "1.3 Intellectual Property Register" },
          { name: "1.4 Software Licenses" },
          { name: "1.5 Domain Names & URLs" },
        ],
      },
      {
        name: "2. Financial Records",
        children: [
          { name: "2.1 Asset Valuation Reports" },
          { name: "2.2 Depreciation Schedules" },
          { name: "2.3 Outstanding Liabilities" },
          { name: "2.4 Tax Records" },
        ],
      },
      {
        name: "3. Contracts & Agreements",
        children: [
          { name: "3.1 Customer Contracts" },
          { name: "3.2 Vendor Agreements" },
          { name: "3.3 Lease Assignments" },
          { name: "3.4 License Transfers" },
        ],
      },
      {
        name: "4. Legal & Compliance",
        children: [
          { name: "4.1 Title Documents" },
          { name: "4.2 Encumbrances & Liens" },
          { name: "4.3 Regulatory Approvals" },
          { name: "4.4 Environmental Reports" },
        ],
      },
    ],
    ipo: [
      {
        name: "1. Corporate Governance",
        children: [
          { name: "1.1 Board Composition & Independence" },
          { name: "1.2 Committee Charters" },
          { name: "1.3 Corporate Governance Guidelines" },
          { name: "1.4 Code of Ethics" },
          { name: "1.10 Related Party Transactions" },
        ],
      },
      {
        name: "2. Financial & Accounting",
        children: [
          { name: "2.1 Audited Financials (3 years)" },
          { name: "2.2 MD&A Analysis" },
          { name: "2.3 Revenue Recognition Policies" },
          { name: "2.4 Internal Controls (SOX)" },
          { name: "2.5 Projections & Guidance" },
        ],
      },
      {
        name: "3. Legal & Regulatory",
        children: [
          { name: "3.1 Material Agreements" },
          { name: "3.2 Litigation Disclosure" },
          { name: "3.3 Regulatory Filings" },
          { name: "3.4 IP Portfolio" },
          { name: "3.5 Data Privacy Compliance" },
        ],
      },
      {
        name: "4. Business Operations",
        children: [
          { name: "4.1 Business Description" },
          { name: "4.2 Market Analysis" },
          { name: "4.3 Competitive Landscape" },
          { name: "4.4 Growth Strategy" },
          { name: "4.5 Risk Factors" },
        ],
      },
    ],
  },
  lifesciences: {
    seriesA: [
      {
        name: "1. Corporate & IP",
        children: [
          { name: "1.1 Articles of Incorporation" },
          { name: "1.2 Patent Portfolio" },
          { name: "1.3 Patent Applications (Pending)" },
          { name: "1.4 Trade Secrets Documentation" },
          { name: "1.5 License Agreements (In/Out)" },
        ],
      },
      {
        name: "2. Clinical & Regulatory",
        children: [
          { name: "2.1 IND Applications" },
          { name: "2.2 Clinical Trial Protocols" },
          { name: "2.3 Clinical Trial Data & Results" },
          { name: "2.4 FDA Correspondence" },
          { name: "2.5 Regulatory Strategy Document" },
          { name: "2.6 GMP Compliance Records" },
        ],
      },
      {
        name: "3. Product Pipeline",
        children: [
          { name: "3.1 Pipeline Summary & Timeline" },
          { name: "3.2 Preclinical Data" },
          { name: "3.3 Formulation Details" },
          { name: "3.4 Manufacturing Processes" },
          { name: "3.5 Stability Studies" },
        ],
      },
      {
        name: "4. Commercial",
        children: [
          { name: "4.1 Market Analysis" },
          { name: "4.2 Competitive Landscape" },
          { name: "4.3 Reimbursement Strategy" },
          { name: "4.4 Key Opinion Leader Advisory" },
        ],
      },
    ],
    ma: [
      {
        name: "1. Corporate & Legal",
        children: [
          { name: "1.1 Corporate Structure Chart" },
          { name: "1.2 All Jurisdiction Registrations" },
          { name: "1.3 Material Contracts" },
          { name: "1.4 Pending/Threatened Litigation" },
          { name: "1.5 Regulatory Actions" },
        ],
      },
      {
        name: "2. IP & Technology",
        children: [
          { name: "2.1 Patent Portfolio Analysis" },
          { name: "2.2 Patent Prosecution History" },
          { name: "2.3 Freedom-to-Operate Opinions" },
          { name: "2.4 IP Assignment Agreements" },
          { name: "2.5 Collaboration Agreements" },
          { name: "2.6 Technology Licenses" },
        ],
      },
      {
        name: "3. Clinical Operations",
        children: [
          { name: "3.1 All Active Clinical Trials" },
          { name: "3.2 Trial Results & Publications" },
          { name: "3.3 CRO Agreements" },
          { name: "3.4 Site Contracts" },
          { name: "3.5 Patient Recruitment Data" },
          { name: "3.6 DSMB Records" },
        ],
      },
      {
        name: "4. Regulatory",
        children: [
          { name: "4.1 FDA/EMA Correspondence" },
          { name: "4.2 Approval History" },
          { name: "4.3 Post-Market Surveillance" },
          { name: "4.4 Adverse Event Reports" },
          { name: "4.5 Recall History" },
          { name: "4.6 GMP Audit Reports" },
        ],
      },
      {
        name: "5. Manufacturing & Supply",
        children: [
          { name: "5.1 Manufacturing Facilities" },
          { name: "5.2 Supply Agreements" },
          { name: "5.3 CMO Agreements" },
          { name: "5.4 Raw Material Sources" },
          { name: "5.5 Capacity Analysis" },
          { name: "5.6 Quality Control Records" },
        ],
      },
      {
        name: "6. Commercial Operations",
        children: [
          { name: "6.1 Product Revenue Data" },
          { name: "6.2 Pricing & Reimbursement" },
          { name: "6.3 Distribution Agreements" },
          { name: "6.4 Sales Force Data" },
          { name: "6.5 Marketing Materials" },
        ],
      },
    ],
  },
  realestate: {
    seriesA: [
      {
        name: "1. Corporate & Legal",
        children: [
          { name: "1.1 Entity Formation Documents" },
          { name: "1.2 Operating Agreements" },
          { name: "1.3 Board/Member Resolutions" },
          { name: "1.4 Capital Account Records" },
        ],
      },
      {
        name: "2. Property Portfolio",
        children: [
          { name: "2.1 Property Summaries" },
          { name: "2.2 Floor Plans & Site Maps" },
          { name: "2.3 Appraisal Reports" },
          { name: "2.4 Environmental Assessments" },
          { name: "2.5 Phase I/II Reports" },
        ],
      },
      {
        name: "3. Financial Records",
        children: [
          { name: "3.1 Rent Roll" },
          { name: "3.2 Historical Operating Statements" },
          { name: "3.3 CAM Reconciliations" },
          { name: "3.4 Tax Bills & Assessments" },
          { name: "3.5 Capital Expenditure History" },
        ],
      },
      {
        name: "4. Leases & Tenants",
        children: [
          { name: "4.1 Master Lease Agreements" },
          { name: "4.2 Lease Amendments" },
          { name: "4.3 Tenant Estoppels" },
          { name: "4.4 Tenant Financial Statements" },
          { name: "4.5 Vacancy Analysis" },
        ],
      },
    ],
    ma: [
      {
        name: "1. Entity & Ownership",
        children: [
          { name: "1.1 Entity Structure Chart" },
          { name: "1.2 Title Reports" },
          { name: "1.3 Deed History" },
          { name: "1.4 Ownership Agreements" },
          { name: "1.5 LLC/Corp Agreements" },
        ],
      },
      {
        name: "2. Property Details",
        children: [
          { name: "2.1 Property Descriptions" },
          { name: "2.2 Zoning Compliance" },
          { name: "2.3 Building Permits" },
          { name: "2.4 Certificate of Occupancy" },
          { name: "2.5 Physical Condition Reports" },
          { name: "2.6 Seismic Reports" },
        ],
      },
      {
        name: "3. Financial Analysis",
        children: [
          { name: "3.1 5-Year Operating History" },
          { name: "3.2 Current Rent Roll" },
          { name: "3.3 Accounts Receivable" },
          { name: "3.4 Capital Reserve Study" },
          { name: "3.5 Debt Assumptions" },
        ],
      },
      {
        name: "4. Leases & Tenant",
        children: [
          { name: "4.1 All Lease Agreements" },
          { name: "4.2 Tenant Correspondence" },
          { name: "4.3 Lease Expiration Schedule" },
          { name: "4.4 Tenant Improvement Records" },
          { name: "4.5 Guaranty Agreements" },
        ],
      },
      {
        name: "5. Environmental & Compliance",
        children: [
          { name: "5.1 Environmental Site Assessments" },
          { name: "5.2 Asbestos Reports" },
          { name: "5.3 Lead Paint Records" },
          { name: "5.4 Underground Storage Tanks" },
          { name: "5.5 Hazardous Waste Records" },
          { name: "5.6 ADA Compliance" },
        ],
      },
      {
        name: "6. Insurance & Risk",
        children: [
          { name: "6.1 Property Insurance Policies" },
          { name: "6.2 Liability Insurance" },
          { name: "6.3 Flood Zone Determination" },
          { name: "6.4 Earthquake Insurance" },
          { name: "6.5 Claims History" },
        ],
      },
    ],
  },
  fintech: {
    seriesA: [
      {
        name: "1. Corporate & Legal",
        children: [
          { name: "1.1 Articles of Incorporation" },
          { name: "1.2 Cap Table" },
          { name: "1.3 Board Minutes" },
          { name: "1.4 Stockholder Agreements" },
        ],
      },
      {
        name: "2. Regulatory & Compliance",
        children: [
          { name: "2.1 Money Transmitter Licenses" },
          { name: "2.2 State Registrations" },
          { name: "2.3 BSA/AML Compliance Program" },
          { name: "2.4 KYC/CDD Procedures" },
          { name: "2.5 Regulatory Examination Reports" },
          { name: "2.6 PCI DSS Certification" },
        ],
      },
      {
        name: "3. Financial Records",
        children: [
          { name: "3.1 Audited Financials" },
          { name: "3.2 Transaction Volume Data" },
          { name: "3.3 Revenue by Product" },
          { name: "3.4 Fee Schedules" },
          { name: "3.5 Cash Flow Projections" },
        ],
      },
      {
        name: "4. Technology & Security",
        children: [
          { name: "4.1 System Architecture" },
          { name: "4.2 API Documentation" },
          { name: "4.3 Security Certifications" },
          { name: "4.4 Penetration Test Results" },
          { name: "4.5 Data Encryption Standards" },
          { name: "4.6 Incident Response Plan" },
        ],
      },
      {
        name: "5. Banking Relationships",
        children: [
          { name: "5.1 Sponsor Bank Agreements" },
          { name: "5.2 Payment Processor Agreements" },
          { name: "5.3 Card Network Agreements" },
          { name: "5.4 Correspondent Bank Relationships" },
        ],
      },
    ],
    ma: [
      {
        name: "1. Corporate & Legal",
        children: [
          { name: "1.1 Corporate Structure" },
          { name: "1.2 All Jurisdiction Registrations" },
          { name: "1.3 Material Contracts" },
          { name: "1.4 Litigation History" },
          { name: "1.5 Regulatory Actions" },
        ],
      },
      {
        name: "2. Regulatory & Licenses",
        children: [
          { name: "2.1 All Licenses & Permits" },
          { name: "2.2 License Transfer Requirements" },
          { name: "2.3 Compliance Program Documentation" },
          { name: "2.4 SAR/CTR Filing History" },
          { name: "2.5 Regulatory Correspondence" },
          { name: "2.6 Pending Investigations" },
        ],
      },
      {
        name: "3. Financial Due Diligence",
        children: [
          { name: "3.1 Audited Financials (3-5 years)" },
          { name: "3.2 Transaction Data & Volume" },
          { name: "3.3 Customer Acquisition Cost" },
          { name: "3.4 Lifetime Value Analysis" },
          { name: "3.5 Intercompany Transactions" },
        ],
      },
      {
        name: "4. Technology & Operations",
        children: [
          { name: "4.1 Full System Architecture" },
          { name: "4.2 Third-Party Integrations" },
          { name: "4.3 Data Migration Plan" },
          { name: "4.4 Business Continuity Plan" },
          { name: "4.5 Vendor Contracts" },
          { name: "4.6 SLA Agreements" },
        ],
      },
    ],
  },
  manufacturing: {
    seriesA: [
      {
        name: "1. Corporate & Legal",
        children: [
          { name: "1.1 Articles of Incorporation" },
          { name: "1.2 Cap Table" },
          { name: "1.3 Board Minutes" },
          { name: "1.4 IP Assignments" },
        ],
      },
      {
        name: "2. Operations & Facilities",
        children: [
          { name: "2.1 Plant Layouts" },
          { name: "2.2 Equipment Lists" },
          { name: "2.3 Production Capacity Analysis" },
          { name: "2.4 Quality Management System" },
          { name: "2.5 ISO Certifications" },
          { name: "2.6 Environmental Permits" },
        ],
      },
      {
        name: "3. Supply Chain",
        children: [
          { name: "3.1 Supplier Agreements" },
          { name: "3.2 Raw Material Sources" },
          { name: "3.3 Inventory Records" },
          { name: "3.4 Logistics Agreements" },
          { name: "3.5 Single Source Risk Analysis" },
        ],
      },
      {
        name: "4. Financial Records",
        children: [
          { name: "4.1 Audited Financials" },
          { name: "4.2 Cost of Goods Sold Analysis" },
          { name: "4.3 Customer Contracts" },
          { name: "4.4 Backlog Reports" },
          { name: "4.5 Capital Expenditure History" },
        ],
      },
    ],
    ma: [
      {
        name: "1. Corporate & Legal",
        children: [
          { name: "1.1 Corporate Structure" },
          { name: "1.2 All Facility Registrations" },
          { name: "1.3 Material Contracts" },
          { name: "1.4 Litigation History" },
          { name: "1.5 Union Agreements" },
        ],
      },
      {
        name: "2. Operations & Manufacturing",
        children: [
          { name: "2.1 All Plant Locations" },
          { name: "2.2 Equipment Valuations" },
          { name: "2.3 Production Processes" },
          { name: "2.4 Quality Control Records" },
          { name: "2.5 Waste Disposal Records" },
          { name: "2.6 OSHA Compliance History" },
        ],
      },
      {
        name: "3. Supply Chain & Customers",
        children: [
          { name: "3.1 All Supplier Contracts" },
          { name: "3.2 Customer Contracts" },
          { name: "3.3 Vendor Risk Assessment" },
          { name: "3.4 Import/Export Records" },
          { name: "3.5 Tariff Classifications" },
        ],
      },
      {
        name: "4. Environmental & Safety",
        children: [
          { name: "4.1 Environmental Audits" },
          { name: "4.2 EPA Compliance Records" },
          { name: "4.3 Hazardous Materials Handling" },
          { name: "4.4 Safety Incident Reports" },
          { name: "4.5 Insurance Claims History" },
        ],
      },
    ],
  },
  energy: {
    seriesA: [
      {
        name: "1. Corporate & Legal",
        children: [
          { name: "1.1 Articles of Incorporation" },
          { name: "1.2 Cap Table" },
          { name: "1.3 Regulatory Filings" },
          { name: "1.4 Land Rights & Leases" },
        ],
      },
      {
        name: "2. Assets & Operations",
        children: [
          { name: "2.1 Reserve Reports" },
          { name: "2.2 Production Data" },
          { name: "2.3 Well Logs & Geological Data" },
          { name: "2.4 Equipment Inventories" },
          { name: "2.5 Pipeline Agreements" },
          { name: "2.6 Storage Facility Details" },
        ],
      },
      {
        name: "3. Regulatory & Compliance",
        children: [
          { name: "3.1 Permits & Licenses" },
          { name: "3.2 Environmental Compliance" },
          { name: "3.3 Emissions Data" },
          { name: "3.4 Water Discharge Permits" },
          { name: "3.5 Mine Safety Records" },
        ],
      },
      {
        name: "4. Financial Records",
        children: [
          { name: "4.1 Audited Financials" },
          { name: "4.2 Revenue by Asset" },
          { name: "4.3 Hedging Agreements" },
          { name: "4.4 Royalty Agreements" },
          { name: "4.5 Production Forecasts" },
        ],
      },
    ],
    ma: [
      {
        name: "1. Corporate & Legal",
        children: [
          { name: "1.1 Corporate Structure" },
          { name: "1.2 All Jurisdiction Registrations" },
          { name: "1.3 Material Contracts" },
          { name: "1.4 Litigation History" },
          { name: "1.5 Joint Venture Agreements" },
        ],
      },
      {
        name: "2. Reserves & Assets",
        children: [
          { name: "2.1 Reserve Reports (3rd Party)" },
          { name: "2.2 Production History" },
          { name: "2.3 Lease Expiration Schedule" },
          { name: "2.4 Title Opinions" },
          { name: "2.5 Asset Retirement Obligations" },
          { name: "2.6 Decommissioning Plans" },
        ],
      },
      {
        name: "3. Environmental & Regulatory",
        children: [
          { name: "3.1 Environmental Site Assessments" },
          { name: "3.2 Regulatory Compliance History" },
          { name: "3.3 Pending Violations" },
          { name: "3.4 Spill/Release History" },
          { name: "3.5 Closure Bond Requirements" },
          { name: "3.6 Land Reclamation Plans" },
        ],
      },
    ],
  },
  healthcare: {
    seriesA: [
      {
        name: "1. Corporate & Legal",
        children: [
          { name: "1.1 Articles of Incorporation" },
          { name: "1.2 Cap Table" },
          { name: "1.3 Board Minutes" },
          { name: "1.4 Medical Director Agreements" },
        ],
      },
      {
        name: "2. Clinical Operations",
        children: [
          { name: "2.1 Patient Volume Data" },
          { name: "2.2 Provider Agreements" },
          { name: "2.3 Payer Contracts" },
          { name: "2.4 Credentialing Records" },
          { name: "2.5 Clinical Protocols" },
          { name: "2.6 Quality Metrics" },
        ],
      },
      {
        name: "3. Regulatory & Compliance",
        children: [
          { name: "3.1 Licenses & Permits" },
          { name: "3.2 HIPAA Compliance" },
          { name: "3.3 State Health Dept Reports" },
          { name: "3.4 Joint Commission Accreditation" },
          { name: "3.5 Malpractice History" },
        ],
      },
      {
        name: "4. Financial Records",
        children: [
          { name: "4.1 Audited Financials" },
          { name: "4.2 Payer Mix Analysis" },
          { name: "4.3 Accounts Receivable Aging" },
          { name: "4.4 Collection Rates by Payer" },
          { name: "4.5 A/R Days Outstanding" },
        ],
      },
    ],
    ma: [
      {
        name: "1. Corporate & Legal",
        children: [
          { name: "1.1 Corporate Structure" },
          { name: "1.2 All Facility Licenses" },
          { name: "1.3 Physician Agreements" },
          { name: "1.4 Non-Compete Agreements" },
          { name: "1.5 Stark Law Compliance" },
        ],
      },
      {
        name: "2. Clinical Operations",
        children: [
          { name: "2.1 All Provider Contracts" },
          { name: "2.2 Payer Contract Details" },
          { name: "2.3 Census Data (3 years)" },
          { name: "2.4 Case Mix Analysis" },
          { name: "2.5 Length of Stay Data" },
          { name: "2.6 Readmission Rates" },
        ],
      },
      {
        name: "3. Regulatory & Compliance",
        children: [
          { name: "3.1 CMS Certification" },
          { name: "3.2 Survey & Deficiency Reports" },
          { name: "3.3 Plan of Correction History" },
          { name: "3.4 Complaint Investigation Records" },
          { name: "3.5 Corporate Integrity Agreements" },
          { name: "3.6 Anti-Kickback Compliance" },
        ],
      },
    ],
  },
  ecommerce: {
    seriesA: [
      {
        name: "1. Corporate & Legal",
        children: [
          { name: "1.1 Articles of Incorporation" },
          { name: "1.2 Cap Table" },
          { name: "1.3 Brand Registrations" },
          { name: "1.4 Domain Name Ownership" },
        ],
      },
      {
        name: "2. Operations & Technology",
        children: [
          { name: "2.1 E-Commerce Platform Details" },
          { name: "2.2 Website Traffic Analytics" },
          { name: "2.3 Conversion Rate Data" },
          { name: "2.4 Fulfillment Operations" },
          { name: "2.5 Inventory Management System" },
          { name: "2.6 Payment Processing Setup" },
        ],
      },
      {
        name: "3. Financial Records",
        children: [
          { name: "3.1 Revenue by Channel" },
          { name: "3.2 Customer Acquisition Cost" },
          { name: "3.3 Average Order Value" },
          { name: "3.4 Return Rate Analysis" },
          { name: "3.5 Gross Margin by Product" },
          { name: "3.6 Advertising Spend & ROAS" },
        ],
      },
      {
        name: "4. Marketing & Brand",
        children: [
          { name: "4.1 Marketing Strategy" },
          { name: "4.2 Social Media Metrics" },
          { name: "4.3 Email Marketing Data" },
          { name: "4.4 Influencer Agreements" },
          { name: "4.5 Brand Guidelines" },
          { name: "4.6 Trademark Registrations" },
        ],
      },
    ],
    ma: [
      {
        name: "1. Corporate & Legal",
        children: [
          { name: "1.1 Corporate Structure" },
          { name: "1.2 All Brand Registrations" },
          { name: "1.3 IP Portfolio" },
          { name: "1.4 Vendor Agreements" },
          { name: "1.5 Marketplace Agreements (Amazon, etc)" },
        ],
      },
      {
        name: "2. Operations",
        children: [
          { name: "2.1 Fulfillment Center Details" },
          { name: "2.2 3PL Agreements" },
          { name: "2.3 Shipping Contracts" },
          { name: "2.4 Return/Refund Policies" },
          { name: "2.5 Customer Service Operations" },
          { name: "2.6 Inventory Valuation" },
        ],
      },
      {
        name: "3. Financial & Metrics",
        children: [
          { name: "3.1 Revenue by SKU/Product" },
          { name: "3.2 Customer Metrics (LTV, CAC)" },
          { name: "3.3 Cohort Analysis" },
          { name: "3.4 Subscription Data (if applicable)" },
          { name: "3.5 Advertising Performance" },
          { name: "3.6 Seasonal Analysis" },
        ],
      },
    ],
  },
};

function FolderTree({ items, level = 0 }: { items: FolderItem[]; level?: number }) {
  return (
    <ul className={level > 0 ? "ml-4 border-l border-gray-200 pl-4" : ""}>
      {items.map((item, i) => (
        <li key={i} className="py-1">
          <div className="flex items-center gap-2 text-sm">
            {item.children ? (
              <svg className="w-4 h-4 text-[#2563eb] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            )}
            <span className={item.children ? "font-semibold text-gray-900" : "text-gray-600"}>
              {item.name}
            </span>
          </div>
          {item.children && <FolderTree items={item.children} level={level + 1} />}
        </li>
      ))}
    </ul>
  );
}

export default function DDChecklistGeneratorPage() {
  const { email: savedEmail, token: savedToken, login } = useAuth();
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [selectedTransaction, setSelectedTransaction] = useState<string | null>(null);
  const [generated, setGenerated] = useState(false);

  const [showEmailModal, setShowEmailModal] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [authStep, setAuthStep] = useState<"email" | "otp">("email");
  const [isLoading, setIsLoading] = useState(false);
  const [authToken, setAuthToken] = useState<string | null>(null);

  const generateChecklist = () => {
    if (selectedIndustry && selectedTransaction) {
      setGenerated(true);
    }
  };

  const reset = () => {
    setSelectedIndustry(null);
    setSelectedTransaction(null);
    setGenerated(false);
  };

  const validateEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const isBusinessEmail = (value: string) => {
    const domain = value.split("@")[1]?.toLowerCase();
    return domain && !freeEmailProviders.includes(domain);
  };

  const handleGenerateClick = () => {
    if (!selectedIndustry || !selectedTransaction) return;
    const stored = getStoredAuth();
    const activeEmail = savedEmail || stored.email;
    setShowEmailModal(true);
    setAuthStep("email");
    setEmail(activeEmail || "");
    setOtp("");
    setEmailError("");
    setOtpError("");
  };

  const handleRequestOtp = async () => {
    if (!email) {
      setEmailError("Email is required");
      return;
    }
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    if (!isBusinessEmail(email)) {
      setEmailError("Please use your business email (no free email providers)");
      return;
    }
    const stored = getStoredAuth();
    const activeEmail = savedEmail || stored.email;
    const activeToken = savedToken || stored.token;
    if (activeEmail && email.toLowerCase() === activeEmail.toLowerCase() && activeToken) {
      setShowEmailModal(false);
      setGenerated(true);
      return;
    }
    setEmailError("");
    setIsLoading(true);
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_URL || "https://spaceaiapp.com/backend/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: REQUEST_OTP_MUTATION,
          variables: { websiteId: WEBSITE_ID, email },
        }),
      });
      const json = await res.json();
      if (json.errors?.length) {
        setEmailError(json.errors[0].message || "Failed to send OTP. Please try again.");
      } else if (json.data?.websiteRequestLoginOtp?.otpSent) {
        setAuthStep("otp");
      } else {
        setEmailError(json.data?.websiteRequestLoginOtp?.message || "Failed to send OTP. Please try again.");
      }
    } catch {
      setEmailError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp) {
      setOtpError("OTP is required");
      return;
    }
    setOtpError("");
    setIsLoading(true);
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_URL || "https://spaceaiapp.com/backend/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: VERIFY_OTP_MUTATION,
          variables: { websiteId: WEBSITE_ID, email, otp },
        }),
      });
      const json = await res.json();
      if (json.errors?.length) {
        setOtpError(json.errors[0].message || "Invalid OTP. Please try again.");
      } else if (json.data?.websiteVerifyLoginOtp?.token) {
        const data = json.data.websiteVerifyLoginOtp;
        setAuthToken(data.token);
        login(email, data.token, {
          userId: data.userId,
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          role: data.role,
          websiteId: data.websiteId,
        });
        setShowEmailModal(false);
        setGenerated(true);
      } else {
        setOtpError("Invalid OTP. Please try again.");
      }
    } catch {
      setOtpError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setOtpError("");
    setOtp("");
    setIsLoading(true);
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_URL || "https://spaceaiapp.com/backend/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: REQUEST_OTP_MUTATION,
          variables: { websiteId: WEBSITE_ID, email },
        }),
      });
      const json = await res.json();
      if (json.errors?.length) {
        setOtpError("Failed to resend OTP. Please try again.");
      }
    } catch {
      setOtpError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const getChecklist = (): FolderItem[] => {
    if (!selectedIndustry || !selectedTransaction) return [];
    const industryData = checklistData[selectedIndustry];
    if (!industryData) return [];
    return industryData[selectedTransaction] || [];
  };

  const checklist = getChecklist();

  const countItems = (items: FolderItem[]): number => {
    return items.reduce((acc, item) => acc + 1 + (item.children ? countItems(item.children) : 0), 0);
  };

  const exportToExcel = () => {
    const rows: (string | number)[][] = [["Folder", "Item", "Status"]];

    checklist.forEach((folder) => {
      if (folder.children) {
        folder.children.forEach((item) => {
          rows.push([folder.name, item.name, "Not Started"]);
        });
      } else {
        rows.push([folder.name, "", "Not Started"]);
      }
    });

    const ws = XLSX.utils.aoa_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Due Diligence Checklist");

    ws["!cols"] = [{ wch: 40 }, { wch: 50 }, { wch: 15 }];

    XLSX.writeFile(wb, `SpaceNexus-DD-Checklist-${selectedIndustry}-${selectedTransaction}.xlsx`);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/tools" className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#2563eb] mb-8 transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Tools
        </Link>

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
            Free Checklist Generator
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Due Diligence <span className="text-[#2563eb]">Checklist</span> Generator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select your industry and transaction type to generate a tailored due diligence index and folder tree.
          </p>
        </div>

        {!generated && (
          <>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">1. Select Industry</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {industries.map((ind) => (
                  <button
                    key={ind.id}
                    onClick={() => setSelectedIndustry(ind.id)}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      selectedIndustry === ind.id
                        ? "border-[#2563eb] bg-blue-50 shadow-md"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <span className="text-2xl mb-2 block">{ind.icon}</span>
                    <span className="text-sm font-semibold text-gray-900">{ind.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">2. Select Transaction Type</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {transactionTypes.map((tx) => {
                  const hasData = checklistData[selectedIndustry || ""]?.[tx.id];
                  return (
                    <button
                      key={tx.id}
                      onClick={() => setSelectedTransaction(tx.id)}
                      disabled={!hasData && selectedIndustry !== null}
                      className={`p-4 rounded-xl border-2 text-left transition-all ${
                        selectedTransaction === tx.id
                          ? "border-[#2563eb] bg-blue-50 shadow-md"
                          : hasData || !selectedIndustry
                          ? "border-gray-200 hover:border-gray-300"
                          : "border-gray-100 bg-gray-50 opacity-50 cursor-not-allowed"
                      }`}
                    >
                      <span className="text-sm font-semibold text-gray-900">{tx.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-center">
              <button
                onClick={handleGenerateClick}
                disabled={!selectedIndustry || !selectedTransaction}
                className="px-8 py-4 bg-[#2563eb] text-white font-semibold rounded-full hover:bg-[#1d4ed8] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                Generate Checklist
              </button>
            </div>
          </>
        )}

        {generated && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5">
                <p className="text-sm text-gray-500 mb-1">Industry</p>
                <p className="text-lg font-bold text-gray-900">{industries.find((i) => i.id === selectedIndustry)?.name}</p>
              </div>
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5">
                <p className="text-sm text-gray-500 mb-1">Transaction Type</p>
                <p className="text-lg font-bold text-gray-900">{transactionTypes.find((t) => t.id === selectedTransaction)?.name}</p>
              </div>
              <div className="bg-white rounded-xl shadow-md border border-blue-200 p-5">
                <p className="text-sm text-gray-500 mb-1">Total Items</p>
                <p className="text-3xl font-black text-[#2563eb]">{countItems(checklist)}</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8 mb-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Folder Structure</h2>
                <button onClick={reset} className="text-sm text-gray-500 hover:text-red-500 transition-colors">
                  Change Selection
                </button>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <FolderTree items={checklist} />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={exportToExcel}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-all shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Export to Excel
              </button>
              <Link
                href="https://app.pmspace.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2563eb] text-white font-semibold rounded-full hover:bg-[#1d4ed8] transition-all shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                1-Click Import into SpaceNexus
              </Link>
            </div>

            <div className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-2xl shadow-xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-3">Ready to populate your data room?</h3>
              <p className="text-blue-100 mb-6 max-w-lg mx-auto">
                SpaceNexus auto-imports this folder structure, pre-fills Q&A templates, and sets granular permissions in under 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/demo" className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#2563eb] font-semibold rounded-full hover:bg-blue-50 transition-all shadow-lg">
                  Request a Demo
                </Link>
                <a href="https://app.pmspace.ai/login?type=SpaceVDR&moduleId=add00f0c-0428-423e-bfa4-01032205ed46&invite=guest&orgName=SPACE+VDR" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-all">
                  Try for Free
                </a>
              </div>
            </div>
          </>
        )}

        {showEmailModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {authStep === "email" ? "Verify Your Email" : "Enter OTP"}
                </h3>
                <button onClick={() => setShowEmailModal(false)} className="text-gray-400 hover:text-gray-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {authStep === "email" ? (
                <>
                  <p className="text-gray-600 mb-4">Enter your business email to generate your due diligence checklist.</p>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent mb-2"
                    onKeyDown={(e) => e.key === "Enter" && handleRequestOtp()}
                    disabled={isLoading}
                  />
                  {emailError && <p className="text-red-500 text-sm mb-2">{emailError}</p>}
                  <button
                    onClick={handleRequestOtp}
                    disabled={isLoading}
                    className="w-full py-3 bg-[#2563eb] text-white font-semibold rounded-xl hover:bg-[#1d4ed8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "Sending OTP..." : "Send Verification Code"}
                  </button>
                </>
              ) : (
                <>
                  <p className="text-gray-600 mb-2">We sent a 6-digit code to <span className="font-semibold text-gray-900">{email}</span></p>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                    placeholder="Enter 6-digit code"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent mb-2 text-center text-2xl tracking-[0.5em] font-mono"
                    onKeyDown={(e) => e.key === "Enter" && handleVerifyOtp()}
                    disabled={isLoading}
                    autoFocus
                    maxLength={6}
                  />
                  {otpError && <p className="text-red-500 text-sm mb-2">{otpError}</p>}
                  <button
                    onClick={handleVerifyOtp}
                    disabled={isLoading || otp.length !== 6}
                    className="w-full py-3 bg-[#2563eb] text-white font-semibold rounded-xl hover:bg-[#1d4ed8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed mb-3"
                  >
                    {isLoading ? "Verifying..." : "Verify & Generate"}
                  </button>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <button onClick={() => setAuthStep("email")} className="text-gray-600 hover:text-[#2563eb] transition-colors">
                      ← Change email
                    </button>
                    <span className="text-gray-300">|</span>
                    <button onClick={handleResendOtp} disabled={isLoading} className="text-gray-600 hover:text-[#2563eb] transition-colors disabled:opacity-50">
                      Resend code
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
