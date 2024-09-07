import { CpuSetting, Designtools, Icon, Note } from "iconsax-react"

export type Project = {
    title: string,
    description: string,
    imgSrc: string,
    link?: string,
  className: string,
    listItems?: ProjectListItemType[]
}

export type ProjectListItemType = {
    icon: Icon,
    title: string,
    value: string
}

export const projects: Project[] = [
    {
        title: "Nautev: No-Code Web Builder",
        description: "Nautev is a no-code web-building platform that empowers users to create stunning websites without writing a single line of code. With Nautev, unleash your creativity and bring your ideas to life with ease.",
        imgSrc: "/images/projects/neutron.png",
        className: "from-indigo-400 to-slate-100",
        listItems: [
            {
                icon: Note,
                title: "Built with",
                value: "Next JS",
            },
            {
                icon: Designtools,
                title: "Project Type",
                value: "Web App",
            },
        ]
    },
    {
        title: "OneList",
        description: "OneList is a note taking app that is developed to unleash your creativity and bring your ideas to life with ease. An intuitive and versatile code editor designed to streamline your coding experience. Whether you're a seasoned developer or just starting your coding journey, Pokit Code is your go-to platform for creating and editing code with ease and efficiency.",
        imgSrc: "/images/projects/notes.png",
        className: "from-emerald-200 to-slate-100",
        listItems: [
            {
                icon: CpuSetting,
                title: "Built with",
                value: "Next JS",
            },
            {
                icon: Designtools,
                title: "Project Type",
                value: "Web App",
            },
        ]
    },
    {
        title: "Neutron",
        description: "Neutron lets you Elevate the visual appeal of your projects with Pokit Code's CSS editing capabilities. Fine-tune stylesheets with precision, thanks to the editor's intuitive design and real-time feedback. Whether you're implementing responsive design or creating intricate animations, Pokit Code empowers you to achieve your desired aesthetic effortlessly.",
        imgSrc: "/images/projects/todo.png",
        className: "from-purple-400 to-slate-100",
        listItems: [
            {
                icon: CpuSetting,
                title: "Built with",
                value: "Next JS",
            },
            {
                icon: Designtools,
                title: "Project Type",
                value: "Web App",
            },
        ]
    },
    {
        title: "Nautev: No-Code Web Builder",
        description: "Nautev is a no-code web-building platform that empowers users to create stunning websites without writing a single line of code. With Nautev, unleash your creativity and bring your ideas to life with ease.",
        imgSrc: "/images/projects/neutron.png",
        className: "from-pink-300 to-slate-100",
        listItems: [
            {
                icon: CpuSetting,
                title: "Built with",
                value: "React JS",
            },
            {
                icon: Designtools,
                title: "Project Type",
                value: "Cross Platform Windows App",
            },
        ]
    },
]