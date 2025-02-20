import Header from "./components/Header"
import Entry from "./components/Entry"

export default function App() {
    return (
        <>
            <Header />
            <main className="container">
                <Entry
                    img={{ 
                        src: "https://www.travelturtle.world/wp-content/uploads/2024/05/d3166e8ba81c4ee6bad79f19409e5972.jpg",
                        alt: "Mount Fuji" 
                    }}
                    title="Mount Fuji"
                    country="Japan"
                    googleMapsLink="https://media.istockphoto.com/id/1456031975/vector/globe-related-icon.jpg?s=612x612&w=0&k=20&c=PBxFIPPcuxdDD9QlV4PlqHnc1y_UI-xf81C4rMYYiTQ="
                    dates="12 Jan, 2021 - 24 Jan, 2021"
                    text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
                />
            </main>
        </>
    )
}