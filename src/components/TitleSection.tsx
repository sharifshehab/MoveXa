const TitleSection = ({ title, size = 'xl' }: { title: string, size: string } ) => {
    return (
        <h3 className={`text-primary font-yantramanav border-b-8 border-double border-b-primary text-${size} inline-flex`}>
            {title}
        </h3>
    );
};

export default TitleSection;