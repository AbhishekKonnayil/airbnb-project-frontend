import Image from "next/image";
import { PropertyType } from "./PropertiesList";
import { useRouter } from "next/navigation";
import FavoriteButton from "../FavoriteButton";

interface PropertyProps {
  property: PropertyType;
  marKFavorite?: (is_favorite: boolean) => void;
}

const PropertiesListItems: React.FC<PropertyProps> = ({
  property,
  marKFavorite,
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/properties/${property.id}`)}
      className="cursor-pointer"
    >
      <div className="relative overflow-hidden aspect-square rounded-xl">
        <Image
          fill
          src={property.image_url}
          alt="cabin-image1"
          sizes="(max-width:768px)768px,(max-width:1200px),768px,768px"
          className="hover:scale-110 object-cover transition h-full w-full"
        />
        {marKFavorite && (
          <FavoriteButton
            id={property.id}
            is_favorite={property.is_favorite}
            markFavorite={(is_favorite) => marKFavorite(is_favorite)}
          />
        )}
      </div>
      <div className="mt-2">
        <p className="text-lg font-bold">{property.title}</p>
      </div>
      <div className="mt-2">
        <p className="text-sm text-gray-500">
          <strong>${property.price_per_night}</strong> for 5 nights
        </p>
      </div>
    </div>
  );
};

export default PropertiesListItems;
