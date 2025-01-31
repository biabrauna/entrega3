interface ServiceCardProps {
    title: string;
    description: string;
    price: string;
  }
  
export default function ServiceCard({ title, description, price }: ServiceCardProps) {
    return (
      <div className="flex flex-col p-4 items-center justify-center w-[80%] bg-blue-700 border-2 border-blue-800 rounded-md text-white border-blue-700 :hover-border-blue-500">
          <div className="w-[100%]">
            
          <h1 className="font-bold" >{title}</h1>
          <p >{description}</p>
          <p><strong>Preço: </strong>{price}</p>
          <button className="w-[100%] h-auto bg-blue-900 hover:bg-blue-800 rounded-md text-white p-1">Solicitar Serviço</button>
          </div>
      </div>
    );
  };
  