import { ReactNode } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

interface MainTemplateProps {
    children: ReactNode
}

const MainTemplate = ({children}: MainTemplateProps) => {
    return(
        <div>
            <Header />
                {children}
            <Footer />
        </div>
    )  
}

export default MainTemplate