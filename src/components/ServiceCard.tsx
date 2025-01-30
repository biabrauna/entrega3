interface ServiceCardProps {
    title: string;
    description: string;
    price: string;
  }
  
export default function ServiceCard({ title, description, price }: ServiceCardProps) {
    return (
      <div className="flex flex-col p-4 items-center justify-center w-[80%] bg-blue-300 text-white border-blue-400 :hover-border-blue-500">
          <div className="w-[100%]">
          <h5 className="text-black">{title}</h5>
          <p className="text-black">{description}</p>
          <p><strong>Preço: </strong>{price}</p>
          <button className="w-[100%] h-auto bg-blue-600 :hover-bg-blue-500 text-white">Solicitar Serviço</button>
          </div>
      </div>
    );
  };
  