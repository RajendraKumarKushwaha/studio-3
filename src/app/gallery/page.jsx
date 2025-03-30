import CenteredBanner from "@/ClientComponent/Banner";
import ContactUs from "@/component/ContactUs";
import MasonryGallery from "@/component/Gallery";

export default function GalleryPage(){
    return <div>
        <CenteredBanner text="Memories in Frames"/>
        <MasonryGallery/>
    </div>
}