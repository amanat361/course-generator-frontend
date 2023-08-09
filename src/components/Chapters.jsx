import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faNewspaper } from "@fortawesome/free-solid-svg-icons";

function Section( props ) {
    return (
        <div className="p-2 bg-zinc-900
                        hover:bg-white hover:text-black hover:shadow-none hover:cursor-pointer transition
                        border-b-4 border-rose-500">
            <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg">{props.title}</h3>
                <FontAwesomeIcon icon={faNewspaper} className="text-lg" />
            </div>
            <p>{props.content}</p>
        </div>
    );
}

function Chapter( props ) {
    return (
        <div id={props.title} className="rounded-lg flex flex-col gap-2 p-4 bg-white shadow-lg shadow-zinc-900">
            <div className="flex justify-between items-center text-black">
                <h2 className="font-bold text-2xl">{props.title}</h2>
                <FontAwesomeIcon icon={faBook} className="text-2xl" />
            </div>
            <p className="text-black font-bold">{props.content}</p>
            <Section title="Section 1" content="Motion Diagrams" />
            <Section title="Section 2" content="Models and Modeling" />
            <Section title="Section 3" content="Position, Time, and Displacement" />
            <Section title="Section 4" content="Velocity" />
            <Section title="Section 5" content="Linear Acceleration" />
            <Section title="Section 6" content="Motion in One Dimension" />
            <Section title="Section 7" content="Solving Problems in Physics" />
            <Section title="Section 8" content="Units and Significant Figures" />
        </div>
    );
}

export default function Chapters() {
    return (
        <div className="flex flex-1 flex-col gap-4 text-white">
            <Chapter title="Chapter 1" content="Concepts of motion" />
            <Chapter title="Chapter 2" content="Kinematics in One Dimension" />
            <Chapter title="Chapter 3" content="Vectors and Coordinate Systems" />
            <Chapter title="Chapter 4" content="Kinematics in Two Dimensions" />
            <Chapter title="Chapter 5" content="Force and Motion" />
        </div>
    );
}