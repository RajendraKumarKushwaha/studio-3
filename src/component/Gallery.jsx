import GalleryClient from "@/ClientComponent/GalleryClient";

const galleryData = [
    {
        title: "Wedding Photography", images: [
            "https://cdn.pixabay.com/photo/2021/09/03/06/10/wedding-6595090_640.jpg",
            "https://cdn.pixabay.com/photo/2023/12/19/11/16/red-8457517_1280.jpg",
            "https://cdn.pixabay.com/photo/2021/09/03/06/10/wedding-6595092_640.jpg",
            "https://cdn.pixabay.com/photo/2022/01/27/09/43/love-6971726_640.jpg",
            "https://cdn.pixabay.com/photo/2022/12/06/05/21/bride-7638298_640.jpg",
            "https://cdn.pixabay.com/photo/2019/03/04/20/15/model-4035094_640.jpg",
            "https://cdn.pixabay.com/photo/2021/04/12/08/19/bride-6171757_640.jpg",
            "https://cdn.pixabay.com/photo/2021/02/18/16/25/wedding-6027624_640.jpg",
           
        ]
    },
    {
        title: "Pre-Wedding Photography", images: [
            "https://cdn.pixabay.com/photo/2018/01/14/14/37/wedding-3081931_640.jpg",
            "https://cdn.pixabay.com/photo/2018/01/14/14/37/wedding-3081930_640.jpg",
            "https://cdn.pixabay.com/photo/2017/12/13/13/49/wedding-3016803_640.jpg",
            "https://cdn.pixabay.com/photo/2017/05/17/00/09/bride-2319466_640.jpg",
            "https://cdn.pixabay.com/photo/2017/12/08/13/11/wedding-3005814_640.jpg",
            "https://cdn.pixabay.com/photo/2021/07/05/09/35/bride-6388640_640.jpg",
            "https://cdn.pixabay.com/photo/2016/12/01/08/19/bride-1874655_640.jpg",
            "https://cdn.pixabay.com/photo/2023/12/11/10/11/indian-bride-8443239_1280.jpg",
            "https://cdn.pixabay.com/photo/2025/01/11/09/08/wedding-9325558_1280.jpg",
            "https://cdn.pixabay.com/photo/2022/09/03/18/53/newlyweds-7430219_640.jpg",
           
        ]
    },
    {
        title: "Haldi Photography", images: [
            'https://cdn.pixabay.com/photo/2025/01/11/09/08/wedding-9325558_1280.jpg',
            'https://cdn.pixabay.com/photo/2022/12/07/09/13/indian-7640653_640.jpg',
            'https://cdn.pixabay.com/photo/2020/04/16/13/13/haldi-5050547_640.jpg',
            'https://cdn.pixabay.com/photo/2021/08/24/11/32/couple-6570391_640.jpg',
            'https://cdn.pixabay.com/photo/2022/03/09/09/16/wedding-7057465_640.jpg',
            'https://cdn.pixabay.com/photo/2023/09/12/11/02/ai-generated-8248592_640.jpg',
           
        ]
    },
    // {
    //     title: "Fashion Photography", images: [
    //         "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/fashion/1.jpg",
    //         "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/fashion/2.jpg",
    //         "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/fashion/5.jpg",
    //         "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/fashion/8.jpg",
    //         "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/fashion/3.jpg",
    //         "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/fashion/4.jpg",
    //         "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/fashion/6.jpg",
    //         "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/fashion/7.jpg"
    //     ]
    // },
    // {
    //     title: "Maternity Photography", images: [
    //         "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/maternity/13.jpg",
    //         "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/maternity/15.jpg",
    //         "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/maternity/16.jpg",
    //         "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/maternity/17.jpg"
    //     ]
    // },
    // {
    //     title: "Kids Photography", images: [
    //         "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/kids/1.jpg",
    //         "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/kids/4.jpg",
    //         "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/kids/2.jpg",
    //         "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/kids/5.jpg"
    //     ]
    // }
];



export default function MasonryGallery() {
  return <GalleryClient galleryData={galleryData} />;
}
