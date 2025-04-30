import React from "react";
import "./Service.css";

const serviceData = [
  {
    icon: "fa-balance-scale",
    title: "Legal Document Creation & Automation",
    description:
      "Legal document automation platforms offer tools to create, customize, and automate documents like contracts, NDAs, wills, and leases. Using pre-built templates, they streamline the drafting process, save time, minimize human error, and ensure accuracy and consistency across various legal paperwork and compliance needs.",
  },
  {
    icon: "fa-clipboard-list",
    title: "Online Legal Consultation",
    description:
      "It offers a secure platform where users can consult with professional lawyers remotely using video calls, live chat, or messaging services. This virtual approach provides a flexible, affordable, and time-saving way to access trusted legal advice without visiting a traditional law office in person.",
  },
  {
    icon: "fa-handshake",
    title: "Contract / Lifecycle Management",
    description:
      "It helps businesses manage the complete contract lifecycle, from creation and negotiation to execution, monitoring, and renewal. Features often include version control, approval workflows, and automated reminders, ensuring timely actions, reducing risks, and maintaining consistency throughout all stages of contract management.",
  },
  {
    icon: "fa-user-tie",
    title: "E-Discovery and Case Management",
    description:
      "This service automates the litigation discovery process, enabling legal professionals to efficiently manage and analyze large volumes of electronic data. It often includes case management tools that help track, organize, and oversee the progress of legal matters, improving accuracy, efficiency, and legal workflow management.",
  },
  {
    icon: "fa-file-shield",
    title: "Legal Research and Knowledge Management",
    description:
      "This provides access to advanced legal research tools, enabling attorneys and users to quickly locate case law, statutes, regulations, and legal materials. AI-powered search capabilities enhance accuracy and relevance, streamlining the research process and supporting more informed legal decisions and case strategies.",
  },
  {
    icon: "fa-scroll",
    title: "Compliance Monitoring and Risk Management",
    description:
      "It helps businesses maintain compliance with regulations like GDPR, corporate governance, and industry-specific laws. It features automated tracking of legal obligations, reporting tools, and risk assessments, ensuring organizations stay updated, avoid penalties, and operate within the legal framework effectively and efficiently.",
  },
  {
    icon: "fa-balance-scale",
    title: "Billing and Time Tracking",
    description:
      "This automates time tracking for lawyers, ensuring accurate billing and streamlined operations. It generates invoices, monitors payments, and manages various fee structures—such as fixed, hourly, or contingency—enhancing efficiency, financial transparency, and client trust within law firms of all sizes.",
  },
  {
    icon: "fa-clipboard-list",
    title: "Intellectual Property (IP) Management",
    description:
      "This service offers tools to manage intellectual property (IP) assets, including patents, trademarks, and copyrights. It supports filing, monitoring, and enforcing IP rights, while also handling renewals and tracking potential infringements to safeguard ownership and maintain legal protection over valuable creations.",
  },
  {
    icon: "fa-handshake",
    title: "Litigation Support",
    description:
      "It provides tools for managing and organizing the litigation process, including evidence and document management, court filings, and secure collaboration with legal teams and clients. It streamlines workflows, enhances case preparation, and ensures better coordination throughout the legal proceedings.",
  },
  {
    icon: "fa-user-tie",
    title: "Alternative Dispute Resolution (ADR) Tools",
    description:
      "It facilitates dispute resolution outside traditional courts through mediation, arbitration, or online dispute resolution (ODR). It typically includes secure communication, document sharing tools, and structured workflows to help parties reach agreements efficiently, saving time, reducing costs, and minimizing legal conflicts.",
  },
  {
    icon: "fa-file-shield",
    title: "Data Privacy and Security Solutions",
    description:
      "This helps businesses comply with data privacy regulations such as GDPR and CCPA, while protecting sensitive legal and client data. These platforms typically provide encryption, secure cloud storage, access controls, and audit tracking features to ensure robust data security and regulatory compliance across legal operations.",
  },
  {
    icon: "fa-scroll",
    title: "Automated Legal Workflow Solutions",
    description:
      "It automates repetitive legal tasks like client intake, contract reviews, and regulatory filings, enhancing overall workflow. This technology boosts efficiency, minimizes human errors, and allows legal professionals to focus on complex matters, ultimately saving time and improving the quality and speed of legal service delivery.",
  },
  {
    icon: "fa-balance-scale",
    title: "Legal Analytics",
    description:
      "Uses artificial intelligence and data analytics to uncover legal trends, predict outcomes, and support strategic decisions. These tools help lawyers understand judicial patterns, assess risks, and gain deeper insights from case precedents, improving accuracy, confidence, and overall effectiveness in legal planning and litigation strategies.",
  },
  {
    icon: "fa-clipboard-list",
    title: "Client Relationship Management (CRM)",
    description:
      "This provides tools for law firms to efficiently manage and maintain client relationships through case updates, appointment scheduling, and communication tracking. These platforms help streamline workflows, enhance client engagement, ensure timely follow-ups, and ultimately improve the quality and consistency of legal service delivery.",
  },
  {
    icon: "fa-handshake",
    title: "Regulatory Technology (RegTech) Solutions",
    description:
      "Focuses on automating compliance with financial regulations, anti-money laundering (AML), Know Your Customer (KYC) requirements, and other industry-specific rules. These platforms typically integrate with existing compliance systems to streamline workflows, reduce manual effort, ensure regulatory adherence, and minimize the risk of legal violations.",
  },
  {
    icon: "fa-user-tie",
    title: "Online Legal Marketplace",
    description:
      "Some platforms offer a marketplace connecting users with legal professionals for services like advice, document drafting, or full legal representation. These platforms often provide user reviews, ratings, and transparent pricing to help clients choose suitable lawyers and ensure quality, accessible, and trustworthy legal support.",
  },
];

const Service = () => {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Comprehensive Legal Services Tailored to Your Needs</h2>
              <i className="fas fa-gavel"></i>
              <p>
                A Legal Service Technology Platform leverages technology to
                deliver a range of services designed to streamline legal
                processes, increase efficiency, and improve access to legal
                services. Here are some of the core services typically offered
                by such platforms:
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {serviceData.map((service, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-12">
              <div className="single-service">
                <i className={`fa-solid ${service.icon}`}></i>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                {/* <div className="bton">Know More...</div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
