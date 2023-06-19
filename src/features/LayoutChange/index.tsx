"use client";

import RadioGroup from "@/components/RadioGroup";

enum LayoutType {
    Table = "table",
    Grid = "grid"
}

type LayoutChangeProps = {
    handleChange: (val: "table" | "grid", e?: React.ChangeEvent<HTMLInputElement>) => void;
    layoutType: "table" | "grid"
}

function LayoutChange({
    handleChange
}: LayoutChangeProps) {
    console.log("layoutchange component loaded")
    const layoutOptions = [
        { value: "grid", label: "Grid" },
        { value: "table", label: "Table" }
    ]
    
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.currentTarget.value;
        if (!["table", "grid"].includes(val)) {
           throw new Error("Unknown parameter"); 
        }
        return handleChange(val as "table" | "grid");
    }

    console.log("layout change rerender")

    return (
        <div className="flex space-x-2 items-center">
            <div className="">Layout</div>
            <RadioGroup
                name="layoutType"
                options={layoutOptions}
                checkedValue="grid"
                onChange={(e) => onChange(e)}
                direction="horizontal"
            />
        </div>
    )
}

export default LayoutChange