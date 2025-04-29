// data/services.ts
export interface Service {
    id: number;
    title: string;
    description: string;
  }
  
  export const services: Service[] = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Short description of the service offered to users to obtain a personalized project.'
    },
    {
      id: 2,
      title: 'Web Design',
      description: 'Short description of the service offered to users to obtain a personalized project.'
    },
    {
      id: 3,
      title: 'Responsive Web Design',
      description: 'Short description of the service offered to users to obtain a personalized project.'
    },
    {
      id: 4,
      title: 'SEO (Web Pages)',
      description: 'Short description of the service offered to users to obtain a personalized project.'
    }
  ];