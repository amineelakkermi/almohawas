const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    title: "font-lyon text-[35px] lg:text-[60px] font-semibold leading-[1.4]",
    title2: "text-[30px] lg:text-[40px] font-bold leading-[1.3]",
    paragraph: " font-normal text-[15px] lg:text-[17px] leading-[30.8px]",
    paragraph2: "font-normal text-[20px] lg:text-[28px] leading-[34.8px] lg:leading-[45px]",
    
    container: `max-w-7xl mx-auto px-6 `,

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "px-4", 
    paddingY: "lg:py-16 py-12",
    padding: "px-4 lg:py-20 py-12",
    marginX: "lg:mx-12 mx-6",
    marginY: "lg:my-12 my-6",
};

export const layout = {
    sectionRow: `flex lg:flex-row flex-col ${styles.paddingY}`,
    sectionColumn: `flex flex-col ${styles.paddingY}`,
    sectionReverse: `flex lg:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} lg:mr-10 mr-0 lg:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} lg:ml-10 ml-0 lg:mt-0 mt-24 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
