import { HouseIcon } from "lucide-react";

const ServiceSection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-2">
            <div className="bg-muted px-4">
                <HouseIcon />
                <h3 className="title">Warehouse Facility</h3>
                <p>Temperate ocean-bass sea chub unicorn treefish eulachon tidewater goby.</p>
            </div>{/* single service */}
            <div className="bg-white px-4">
                <HouseIcon />
                <h3 className="title">Warehouse Facility</h3>
                <p>Temperate ocean-bass sea chub unicorn treefish eulachon tidewater goby.</p>
            </div>{/* single service */}
            <div className="bg-muted px-4">
                <HouseIcon />
                <h3 className="title">Warehouse Facility</h3>
                <p>Temperate ocean-bass sea chub unicorn treefish eulachon tidewater goby.</p>
            </div>{/* single service */}
            <div className="bg-white px-4">
                <HouseIcon />
                <h3 className="title">Warehouse Facility</h3>
                <p>Temperate ocean-bass sea chub unicorn treefish eulachon tidewater goby.</p>
            </div>{/* single service */}

        </div>/* grid wrap*/
    );
};

export default ServiceSection;