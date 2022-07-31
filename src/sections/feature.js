/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Oracle from "../assets/feature/oracle.png"
import reactjs from '../assets/feature/reactjs.png';
import aspnetcore from 'assets/feature/aspnetcore.png';
import sql from 'assets/feature/MySQL.png';
import PostgreSQL from 'assets/feature/postgresql.png';
import SQLServe from 'assets/feature/sqlserver.png';
import Cosmo from 'assets/feature/cosmosdb.png';
import Azure from 'assets/feature/azure.png';
import AzureFunctions from 'assets/feature/azurefunction.png';
import EventGrid from 'assets/feature/eventgrid.png';
import Flutter from 'assets/feature/flutter.png';
import XamarinForms from 'assets/feature/xamarin.png'
const data = [
  {
    id: 1,
    imgSrc: Oracle,
    altText: 'Fast Performance',
    title: 'ORACLE 21C',
    text:
      'Oracle Database is the first database designed for enterprise grid computing, the most flexible and cost effective way to manage information and applications.',
  },
  {
    id: 2,
    imgSrc: reactjs,
    altText: 'Front-end',
    title: ' REACT JS',
    text:
     'React.js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications.',  
  },
  {
    id: 3,
    imgSrc: aspnetcore,
    altText: 'aspnetcore',
    title: 'ASP.NET 6 API AND MVC THE LATEST VESRION',
    text:
      'ASP.NET Core is a cross-platform, high-performance, open-source framework for building modern, cloud-enabled, Internet-connected apps.',
  },
  {
    id: 4,
    imgSrc: sql,
    altText: 'MYSQL',
    title: 'MYSQL',
    text:
      'MySQL is a relational database management system (RDBMS) developed by Oracle that is based on structured query language (SQL).',
  },
  {
    id: 5,
    imgSrc: PostgreSQL,
    altText: 'PostgreSQL ',
    title: 'PostgreSQL ',
    text:
      'PostgreSQL is a powerful, open source object-relational database system with over 30 years of active development.',
  },
  {
    id: 6,
    imgSrc: SQLServe,
    altText: 'SQL Serve ',
    title: 'SQL Serve ',
    text:
      'SQL Server is a relational database management system, or RDBMS, developed and marketed by Microsoft.',
  },
  {
    id: 7,
    imgSrc: Cosmo,
    altText: 'cosmosdb',
    title: 'COSMOSDB',
    text:
      'Azure Cosmos DB is a fully managed NoSQL database for modern app development.',
  },
  {
    id: 8,
    imgSrc: Azure,
    altText: 'Azure',
    title: 'AZURE',
    text:
      'The Azure cloud platform is more than 200 products and cloud services designed to help you bring new solutions to life—to solve today’s challenges and create the future.',
  },
  {
    id: 9,
    imgSrc: AzureFunctions,
    altText: 'Azure Functions',
    title: 'Azure Functions',
    text:
      'Azure Functions is a serverless solution that allows you to write less code, maintain less infrastructure, and save on costs.',
  },
  {
    id: 10,
    imgSrc: EventGrid,
    altText: 'EVENT GRID',
    title: 'EVENT GRID',
    text:
      'Event Grid is a fully managed event service that enables you to easily manage events across many different Azure services and applications.',
  },
  {
    id: 11,
    imgSrc: XamarinForms,
    altText: 'XamarinForms',
    title: 'XAMARIN FORMS',
    text:
      'Xamarin Forms is an open source cross-platform framework from Microsoft for building iOS, Android, & Windows apps with . NET from a single shared codebase',
  },
  {
    id: 12,
    imgSrc: Flutter,
    altText: 'flutter',
    title: 'Flutter',
    text:
      'Flutter is an open source framework by Google for building beautiful, natively compiled, multi-platform applications from a single codebase.',
  },
 
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          slogan="OUR TECHNOLOGIES "
          title="Amazing Useful Technologies"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
