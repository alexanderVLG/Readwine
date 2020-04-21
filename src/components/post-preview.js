import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import ReadLink from './read-link';


const PostPreview = ({ post }) => (
    <article
        css={css`
            display: flex;
            border-bottom: 1px solid #ddd;
            margin-top: 0;
            padding-bottom: 1rem;

            :first-of-type {
                margin-top: 1rem;
            }

            @media (max-width: 610px) {
                flex-direction: column;
            }
        `}
    >
        <Link to={post.slug}
            css={css`
                margin: 1rem 1rem 0 0;
                min-width: 150px;
            `}
        >
            <Image
                fluid={post.image.sharp.fluid}
                css={css`
                    border-radius: 10px;
                    * {
                        margin-top: 0;
                        
                    }
                `}
                alt={post.title}
            >
            </Image>
        </Link>
        <div>
            <h3>
                <Link to={post.slug}>{post.title}</Link>
            </h3>
            <p>{post.excerpt}</p>
            <ReadLink to={post.slug}>Читать статью &rarr;</ReadLink>
        </div>
    </article >
);

export default PostPreview;