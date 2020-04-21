import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import useInstagram from '../hooks/use-instagram';

const Insta = () => {
    const instaPhotos = useInstagram();
    const { username } = instaPhotos[0];

    return (
        <>
            <div
                css={css`
                    font-size: 1.5rem;
                    color: #000;
                    font-weight: 500;
                `}
            >Follow me in instagram @{username}</div>
            <div
                css={css`
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    margin: 2rem -0.5rem;
                `}
            >
                {instaPhotos.map(photo => (
                    <a
                        key={photo.id}
                        href={`https://instagram.com/p/${photo.id}/`}
                        css={css`
                            
                            display: block;
                            margin: 0.2rem;
                            max-width: calc(33% - 1rem);
                            width: 120px;
                            transition: 200ms box-shadow linear;

                            :focus,
                            :hover {
                                box-shadow: 0 0 14px #22222244;
                                z-index: 10;
                            }
                        `}
                    >
                        <Image
                            fluid={photo.fluid}
                            alt={photo.caption}
                            css={css`
                                width: 100%;
                                
                                * {
                                    margin-top: 0;
                                }
                            `}
                        />
                    </a>
                ))}
            </div>
            <a href={`https://instagram.com/${username}`} target={`_blank`}>
                Переходи по ссылке &rarr;
            </a>
        </>
    );
};

export default Insta;