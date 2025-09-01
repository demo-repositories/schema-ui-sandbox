import {type SchemaTypeDefinition} from 'sanity'
// documents
import page from './documents/page'
import post from './documents/post'
import author from './documents/author'
import category from './documents/category'
import faq from './documents/faq'
import testimonial from './documents/testimonial'
import navigation from './documents/navigation'
import settings from './documents/settings'
import email from './documents/email'
// Schema UI shared objects
import blockContent from './blocks/shared/block-content'
import link from './blocks/shared/link'
import {colorVariant} from './blocks/shared/color-variant'
import {buttonVariant} from './blocks/shared/button-variant'
import sectionPadding from './blocks/shared/section-padding'
// Schema UI objects
import hero1 from './blocks/hero/hero-1'
import hero2 from './blocks/hero/hero-2'
import sectionHeader from './blocks/section-header'
import splitRow from './blocks/split/split-row'
import splitContent from './blocks/split/split-content'
import splitCardsList from './blocks/split/split-cards-list'
import splitCard from './blocks/split/split-card'
import splitImage from './blocks/split/split-image'
import splitInfoList from './blocks/split/split-info-list'
import splitInfo from './blocks/split/split-info'
import gridCard from './blocks/grid/grid-card'
import pricingCard from './blocks/grid/pricing-card'
import gridPost from './blocks/grid/grid-post'
import gridRow from './blocks/grid/grid-row'
import carousel1 from './blocks/carousel/carousel-1'
import carousel2 from './blocks/carousel/carousel-2'
import timelineRow from './blocks/timeline/timeline-row'
import timelinesOne from './blocks/timeline/timelines-1'
import cta1 from './blocks/cta/cta-1'
import logoCloud1 from './blocks/logo-cloud/logo-cloud-1'
import faqs from './blocks/faqs'
import newsletter from './blocks/forms/newsletter'
import allPosts from './blocks/all-posts'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [
    // documents
    page,
    post,
    author,
    category,
    faq,
    testimonial,
    navigation,
    settings,
    email,
    // shared objects
    blockContent,
    link,
    colorVariant,
    buttonVariant,
    sectionPadding,
    // blocks
    hero1,
    hero2,
    sectionHeader,
    splitRow,
    splitContent,
    splitCardsList,
    splitCard,
    splitImage,
    splitInfoList,
    splitInfo,
    gridCard,
    pricingCard,
    gridPost,
    gridRow,
    carousel1,
    carousel2,
    timelineRow,
    timelinesOne,
    cta1,
    logoCloud1,
    faqs,
    newsletter,
    allPosts,
  ],
}
