import React from 'react';
import { Button } from '../Button';

type SectionTopProps = {
    mainText?: string | React.ReactNode[];
    subText?: string | React.ReactNode[];
    chipText?: React.ReactNode;
    children?: React.ReactNode;
};

export function SectionTop({
    mainText = '',
    subText = '',
    chipText,
    children,
}: SectionTopProps) {
    const renderMultilineText = (text: string | React.ReactNode[]) => {
        if (Array.isArray(text)) {
            return text.map((line, i) => (
                <React.Fragment key={i}>
                    {line}
                    {i < text.length - 1 && <br />}
                </React.Fragment>
            ));
        }

        return text.split('\n').map((line, i) => (
            <React.Fragment key={`line-${i}`}>
                {line}
                {i < text.split('\n').length - 1 && <br />}
            </React.Fragment>
        ));
    };

    return (
        <div className="flex flex-col gap-6">
            {chipText && (
                <Button className="bg-transparent w-max border-[#7575FE] text-[#7575FE] border-1">
                    {chipText}
                </Button>
            )}
            <h1 className="text-3xl font-bold whitespace-pre-line">
                {renderMultilineText(mainText)}
            </h1>
            {children || (
                <p className="text-[#555555] dark:text-gray-400 whitespace-pre-line">
                    {renderMultilineText(subText)}
                </p>
            )}
        </div>
    );
}
