import React from 'react';

export const onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
    setPostBodyComponents([
        <div key={pluginOptions.key || 'portal'} id={pluginOptions.id || 'portal'}>
            {pluginOptions.text}
        </div>
    ]);
};
