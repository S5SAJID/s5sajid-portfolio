import useMousePosition from "@/libs/useMousePosition";

export default function MouseCursorEffect() {
    const { x, y } = useMousePosition();
    return (
        <div
            className="size-6 bg-primary fixed z-[-1] rounded-2xl"
            style={{ left: (x - 28 / 2) + "px", top: (y - 28 / 2) + "px" }}
        ></div>
    );
}