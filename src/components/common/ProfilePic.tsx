interface IProfilePic {
    src: string;
}

export const ProfilePic = (props: IProfilePic) => (
    <img src={props.src} className="w-50 h-64 rounded-full" />
);
