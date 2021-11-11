import React from 'react';

import { ParagraphProps } from './ParagraphProps';
import './Paragraph.scss';

const Paragraph = (props: ParagraphProps): JSX.Element => {
    const { content } = props;
    const formatedContent = content.split('.');
    return (
        <div>
            {formatedContent.map((sentence, i) => {
                if (sentence.length) {
                    return (
                        <p className="paragraph" key={i}>
                            {sentence}
                        </p>
                    );
                }
            })}
        </div>
    );
};

export default Paragraph;
