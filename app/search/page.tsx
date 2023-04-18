import { Cuisine, PRICE, PrismaClient, Location } from "@prisma/client";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import SearchSideBar from "./components/SearchSideBar";

const prisma = new PrismaClient();
interface SearchParams {
  city?: string;
  price?: PRICE;
  cuisine?: string;
}
const fetchRestaurantsByCity = (SearchParams: SearchParams) => {
  const where: any = {};
  if (SearchParams.city) {
    const location = {
      name: {
        equals: SearchParams.city.toLocaleLowerCase(),
      },
    };
    where.location = location;
  }
  if (SearchParams.cuisine) {
    const cuisine = {
      name: {
        equals: SearchParams.cuisine.toLocaleLowerCase(),
      },
    };
    where.cuisine = cuisine;
  }
  if (SearchParams.price) {
    const price = {
      equals: SearchParams.price,
    };
    where.price = price;
  }

  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
    reviews: true,
  };

  return prisma.restaurant.findMany({
    where,
    select,
  });
};

const fetchLocations = async () => {
  return prisma.location.findMany();
};

const fetchCuisines = async () => {
  return prisma.cuisine.findMany();
};

export default async function Search({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const restaurants = await fetchRestaurantsByCity(searchParams);
  const location = await fetchLocations();
  const cuisine = await fetchCuisines();
  // console.log(restaurants);
  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar
          locations={location}
          cuisines={cuisine}
          searchParams={searchParams}
        />
        <div className="w-5/6">
          {restaurants.length ? (
            <>
              {restaurants.map((restaurant) => (
                <RestaurantCard restaurant={restaurant} key={restaurant.id} />
              ))}
            </>
          ) : (
            <p>Sorry, we found no restaurants in this area...</p>
          )}
        </div>
      </div>
    </>
  );
}
// 1. extract the query params
//    - Search(params: any)
//    - console.log("PARAMS SEARCH", params.searchParams.city);

// export default function Search({
//   searchParams,
// }: {
//   searchParams: { city: string };
// })

// 2. Fetch for all restaurants with location=city. Only ask for the data that you need

// 3. If there is no data, show a no restaurants found message
