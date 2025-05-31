import offering1 from "@/assets/images/offerings/offering1.png"
import offering2 from "@/assets/images/offerings/offering2.png"
import offering3 from "@/assets/images/offerings/offering3.png"
import offering4 from "@/assets/images/offerings/offering4.png"
import offering5 from "@/assets/images/offerings/offering5.png"
import offering6 from "@/assets/images/offerings/offering6.png"  
import offering7 from "@/assets/images/offerings/offering7.png"
import offering8 from "@/assets/images/offerings/offering8.png"  

const offerings: {id: number, image:string, title:string, subtitle:string, body?:string}[] = [
    {
        id: 1, 
        image: offering1, 
        title: "Amazon Redshift Solutions", 
        subtitle: "High-performance data warehousing solutions with Amazon Redshift for efficient analysis and insights.",
        body: `Features: High-Performance Query Engine: Amazon Redshift uses a massively parallel processing (MPP) architecture and columnar storage, 
        enabling high-speed query performance across large datasets. It supports complex SQL queries, joins, and advanced analytics functions. 
        Scalable and Elastic: Amazon Redshift scales storage and compute independently, allowing organizations to start with a single node and scale up to thousands of nodes as data and query requirements grow. 
        With Redshift Spectrum, you can directly query data in Amazon S3 without moving it into your data warehouse, offering virtually unlimited scalability. Advanced Data Integration: 
        Amazon Redshift integrates seamlessly with AWS data lakes and ETL tools like AWS Glue, allowing easy data ingestion and transformation. It also supports integrations with third-party BI tools, 
        making it a versatile choice for diverse analytics workloads.`
    },
    {
        id: 2, 
        image: offering2, 
        title: "AWS CloudFormation", 
        subtitle: "Seamless migration of databases to AWS with minimal downtime and complete data integrity.",
        body: `Our AWS CloudFormation solution offers a complete package for designing, deploying, 
        and managing cloud infrastructure: Modular Template Library: Extensive collection of pre-built, customizable CloudFormation 
        templates Covers common architectural patterns and best practices Regular updates to incorporate new AWS services and features Custom Template Development: 
        Tailored CloudFormation templates designed to meet specific business needs Integration of existing infrastructure into 
        CloudFormation stacks Multi-Environment Management: Streamlined approach for managing dev, test, and production environments 
        Consistent infrastructure across all stages of the development lifecycle Compliance and Security Framework: 
        Built-in compliance checks for industry standards (e.g., HIPAA, PCI DSS) Security best practices baked into all templates.`
    },
    {
        id: 3, 
        image: offering3, 
        title: "AWS Database Migration", 
        subtitle: "Fully managed ETL (Extract, Transform, Load) service that makes it simple to prepare and load your data for analytics.",
        body: `Seamless Database Migration: AWS DMS for migrating relational databases, supporting MySQL, PostgreSQL, Oracle, SQL Server, and Amazon Aurora. Minimal Downtime: Enabling live migrations with minimal downtime, ensuring business continuity. Continuous data replication: AWS DMS allows near-real-time synchronization for one-time or hybrid cloud migrations. AWS DMS leverages AWS Schema Conversion Tool (SCT) to automate schema and code conversion, reducing manual effort and accelerating compatibility.`},
    {
        id: 4, 
        image: offering4, 
        title: "AWS Kinesis", 
        subtitle: "Infrastructure as code to model and provision AWS and third-party resources in your cloud environment.",
        body: `Real-Time Data Ingestion and Processing: Amazon Kinesis allows you to capture and process massive streams of data from sources such as IoT devices, log files, social media feeds, and more. It enables real-time analytics by ingesting and processing data as it arrives. Flexible Data Streams: Kinesis Data Streams supports custom real-time data processing, where you can write applications to continuously read and analyze data, providing a highly flexible architecture for real-time analytics. Data Analytics: With Kinesis Data Analytics, organizations can perform real-time analytics on streaming data using SQL, without needing to build custom code. This allows for faster insights and actions from incoming data. Video Streaming: Amazon Kinesis Video Streams enables secure, real-time video ingestion for analytics, machine learning, and monitoring use cases, making it ideal for applications such as security monitoring or media analysis.`
    },

    {
        id: 5, 
        image: offering5, 
        title: "AWS WAF", 
        subtitle: "Set up and govern a secure, compliant multi-account AWS environment with streamlined delivery.",
        body: `Real-Time Data Ingestion and Processing: Amazon Kinesis allows you to capture and process massive streams of data from sources such as IoT devices, log files, social media feeds, and more. It enables real-time analytics by ingesting and processing data as it arrives. Flexible Data Streams: Kinesis Data Streams supports custom real-time data processing, where you can write applications to continuously read and analyze data, providing a highly flexible architecture for real-time analytics. Data Analytics: With Kinesis Data Analytics, organizations can perform real-time analytics on streaming data using SQL, without needing to build custom code. This allows for faster insights and actions from incoming data. Video Streaming: Amazon Kinesis Video Streams enables secure, real-time video ingestion for analytics, machine learning, and monitoring use cases, making it ideal for applications such as security monitoring or media analysis.`
    },

    {
        id: 6, 
        image: offering6, 
        title: "Cloud Readiness and Deployment", 
        subtitle: "Serverless computing solutions allowing you to run code without provisioning or managing servers.",
        body: `We offer expert advisory and strategic consulting services to organizations preparing for cloud adoption. Our team works closely with clients to design tailored cloud deployment strategies, ensuring seamless integration, optimal resource utilization, and alignment with business goals. From initial assessment to implementation, we empower businesses to harness the full potential of cloud infrastructure with confidence and efficiency.`
    },

    {
        id: 7, 
        image: offering7, 
        title: "Cost Optimization", 
        subtitle: "Advanced web application firewall services to protect your applications from common exploits and threats.",
        body: `We assist customers in streamlining their cloud infrastructure expenses by analyzing and optimizing resource allocation across their cloud environment. By leveraging advanced analytics and automation, We ensure that customers are utilizing the most cost-efficient resources tailored to their specific workloads and operational needs. The objective is to minimize cloud expenditure without compromising performance, ensuring that clients achieve the same or better throughput while reducing overall costs.
`
    },

    {
        id: 8, 
        image: offering8, 
        title: "DataFlow Accelerator - Powered by AWS Glue", 
        subtitle: "Create, publish, maintain, monitor, and secure APIs at any scale for your applications.",
        body: `Our solution harnesses AWS Glue to deliver a serverless, cost-effective data integration and ETL platform. Key features include: Automated Data Discovery: AWS Glue Crawlers catalog data from diverse sources, maintaining an up-to-date metadata repository. Scalable ETL: Develop and deploy serverless ETL jobs supporting Python and Scala. Data Lake Optimization: Implement best practices for S3 data management and enable efficient Athena querying. Real-time Processing: Utilize Glue Streaming ETL for near real-time transformations. Advanced Monitoring: Custom CloudWatch dashboards and job metrics for performance tuning. Security & Compliance: Fine-grained access controls and data encryption.
`},

    {
        id: 9, 
        image: offering8, 
        title: "Migration and Modernization", 
        subtitle: "Create, publish, maintain, monitor, and secure APIs at any scale for your applications.",
        body: `Skygrid's specialized team empowers businesses to seamlessly transition their essential workloads to the cloud, leveraging cutting-edge technology and tailored strategies. By focusing on modernization and scalability, We ensure a smooth migration process that aligns with your organization’s goals and future growth.

`},

    {
        id: 10, 
        image: offering8, 
        title: "Modernization", 
        subtitle: "Create, publish, maintain, monitor, and secure APIs at any scale for your applications.",
        body: `SkyGrid specializes in helping enterprises transition from outdated systems to cutting-edge, cloud-based architectures. By harnessing advanced cloud platforms and innovative automation tools, SkyGrid empowers businesses to streamline operations, enhance scalability, and future-proof their technology ecosystems. Their approach focuses on seamless integration, ensuring minimal disruption while maximizing efficiency and agility in the modernization journey`
    },
]

export {offerings}