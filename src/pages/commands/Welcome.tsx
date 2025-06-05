import imgSrc from "@/assets/profile.jpg";
import pdfUrl from "@/assets/Full_Stack_Developer.pdf";

import { MailIcon, GithubIcon, LinkedInIcon, ResumeIcon } from "@/assets/Icons";
import { ProfilePic } from "@/components/common";
import { ISummaryProps, Summary } from "@/components/derived";

const ABOUT_DETAILS: ISummaryProps = {
    title: "About",
    details: [
        {
            detail: "Aakash Chaudhary",
            icon: <span className="font-bold">Name:</span>,
        },
        {
            detail: "Software Developer",
            icon: <span className="font-bold">Profession:</span>,
        },
        {
            detail: "25 Years",
            icon: <span className="font-bold">Uptime:</span>,
        },
        {
            detail: "Arch Linux x86_64",
            icon: <span className="font-bold">OS:</span>,
        },
        {
            detail: "Javascript/Typescript, React, NodeJS, SQL, Docker, Nginx, Scala, ZIO, AWS, Azure, Kafka",
            icon: <span className="font-bold">Tools:</span>,
        },
    ],
};

const CONTACT_DETAILS: ISummaryProps = {
    title: "Contact",
    details: [
        {
            detail: "aakashchy13@gmail.com",
            icon: <MailIcon />,
            href: "mailto:aakashchy13@gmail.com",
        },
        {
            detail: "psycoder01",
            icon: <GithubIcon />,
            href: "https://github.com/psycoder01",
        },
        {
            detail: "Aakash Chaudhary",
            icon: <LinkedInIcon />,
            href: "https://www.linkedin.com/in/aakash-chaudhary-8882871a6/",
        },
        {
            detail: "Resume",
            icon: <ResumeIcon />,
            href: pdfUrl,
            download: true,
        },
    ],
};

const Welcome = () => {
    return (
        <div className="ml-4 flex flex-col gap-4 md:flex-row lg:flex-row">
            <ProfilePic src={imgSrc} />
            <div className="flex flex-col justify-between">
                <Summary
                    title={ABOUT_DETAILS.title}
                    details={ABOUT_DETAILS.details}
                />
                <br />
                <Summary
                    title={CONTACT_DETAILS.title}
                    details={CONTACT_DETAILS.details}
                />
            </div>
        </div>
    );
};

export default Welcome;
