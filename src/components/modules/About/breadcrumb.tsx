import Container from "@/components/Container";
import { ChevronRight } from "lucide-react";

const BreadCrumb = ({ heading }: { heading: string }) => {
    return (
        <div className="breadcrumbImg py-32">
            <Container>
                <h3 className="text-3xl md:text-5xl text-card font-yantramanav mb-3">{heading}</h3>
                <a className="inline-flex items-center gap-2 text-card text-sm">Home <ChevronRight size={20} /> <span className="text-primary">{heading}</span></a>
            </Container>
        </div>
    );
};

export default BreadCrumb;