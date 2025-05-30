import imgSrc from "@/assets/profile.jpg";
import pdfUrl from "@/assets/Full_Stack_Developer.pdf";

import {
    IdentityIcon,
    UserIcon,
    WrenchIcon,
    BuzzIcon,
    MailIcon,
    GithubIcon,
    LinkedInIcon,
    ContactIcon,
    ResumeIcon,
} from "@/assets/Icons";
import { ProfilePic } from "@/components/common";
import { ISummaryProps, Summary } from "@/components/derived";

const ABOUT_DETAILS: ISummaryProps = {
    title: "About",
    titleIcon: <IdentityIcon />,
    details: [
        { detail: "Aakash Chaudhary", icon: <UserIcon /> },
        { detail: "Software Developer", icon: <WrenchIcon /> },
        {
            detail: "Javascript/Typescript, React, NodeJS, SQL, Docker, Nginx, Scala, ZIO",
            icon: <BuzzIcon />,
        },
    ],
};

const CONTACT_DETAILS: ISummaryProps = {
    title: "Contact",
    titleIcon: <ContactIcon />,
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
                    titleIcon={ABOUT_DETAILS.titleIcon}
                    details={ABOUT_DETAILS.details}
                />
                <br />
                <Summary
                    title={CONTACT_DETAILS.title}
                    titleIcon={CONTACT_DETAILS.titleIcon}
                    details={CONTACT_DETAILS.details}
                />
            </div>
        </div>
    );
};

export default Welcome;
