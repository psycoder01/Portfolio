interface IProfilePic {
    src: string;
}

export const ProfilePic = (props: IProfilePic) => (
    <img src={props.src} className="max-w-[20vw] max-h-[30vh] rounded-full" />
);
