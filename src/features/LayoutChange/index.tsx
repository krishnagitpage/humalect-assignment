"use client";

import RadioGroup from "@/components/RadioGroup";

enum LayoutType {
    Table = "table",
    Grid = "grid"
}

type LayoutChangeProps = {
    handleChange?: (val: "table" | "grid", e?: React.ChangeEvent<HTMLInputElement>) => void;
}

function LayoutChange({
    handleChange
}: LayoutChangeProps) {

    const layoutOptions = [
        { value: "grid", label: "Grid" },
        { value: "table", label: "Table" }
    ]
    
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.currentTarget.value;
        if (!["table", "grid"].includes(val)) {
           throw new Error("Unknown parameter"); 
        }
        // return handleChange(val as "table" | "grid");
    }

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