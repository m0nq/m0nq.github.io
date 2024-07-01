import { ReactNode } from 'react';
import { ReactElement } from 'react';

import './article.styles.css';

export const Article = ({ title, children }: { title: string, children: ReactNode }): ReactElement => {

    return (
        <>
            <article className="post">
                <h1 className="post-title">{title}<span>.</span></h1>
                <article className="post-content">
                    {children}
                    <br />
                </article>
            </article>
        </>
    );
};
