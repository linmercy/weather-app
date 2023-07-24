import { getClient } from "@/apollo-client";
import CalloutCard from "@/components/CalloutCard";
import SidePanel from "@/components/SidePanel";
import StatsCard from "@/components/StatsCard";
import fetchQueries from "@/graphql/queries/fetchQueries";

type Props = {
    params: {
        city: string;
        lat: string;
        long: string;
    };
};


async function WeatherPage({ params: {city, lat, long}}: Props) {
    const client = getClient();
    
    const { data } = await client.query({
        query: fetchQueries,
        variables: {
            current_weather: "true",
            latitude: lat,
            longitude: long,
            timezone: 'Africa/Cairo'
        }
    });

    const results: Root = data.myQuery;
    console.log(results);
    
  return (
    <div>
        <SidePanel city={city} long={long} lat={lat} results={results} />

        <div className="">
            <div className=" p-5">
                <div className=" pb-5">
                    <h2 className=" font-bold text-xl">Weather Overview</h2>
                    <p className=" text-sm text-gray-600">
                        Last updated at:{""}
                        {new Date().toLocaleString()}
                        ({results.timezone_abbreviation})
                    </p>
                </div>

                <div className=" m-2">
                    <CalloutCard 
                        warning 
                        message="GPT-3.5 Summary"  
                    />
                </div>

                <div className=" mt-5 grid grid-cols-1 xl:grid-cols-2 gap-5 m-2">
                    {/* <StatsCard 
                        title="Maximum Temperature"
                        metric={`${results.daily.temperature_2m_max[0].toFixed(1)}`}
                        color="yellow"
                    /> */}

                    {/* <StatsCard
                        title="Minimum Temperature"
                        metric={`${results.daily.temperature_2m_min[0].toFixed(1)}`}
                        color="blue"
                    /> */}

                    {/* <div className="">
                        <StatsCard
                            title="UV Index"
                            metric={`${results.daily.uv_index_max[0].toFixed(1)}`}
                            color="orange"
                        />
                        {Number(results.daily.uv_index_max[0].toFixed(1)) > 5 && (
                            <CalloutCard
                                message={"The UV is high today!"}
                                warning
                            />
                        )}
                    </div> */}


                    <div className="flex space-x-3">
                        <StatsCard
                            title="Wind Speed"
                            metric={`${results.current_weather.windspeed.toFixed(1)}m/s`}
                            color="rose"
                        />

                        <StatsCard
                            title="Wind Direction"
                            metric={`${results.current_weather.winddirection.toFixed(1)}`}
                            color="rose"
                        />
                    </div>

                </div>  
            </div>

            <hr className=" space-y-4" />

            {/* TempChart */}

            {/* RainChart */}

            {/* HumidityChart */}
        </div>
    </div>
  );
}

export default WeatherPage;