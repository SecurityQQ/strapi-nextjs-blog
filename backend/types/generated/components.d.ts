import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsAuthContent extends Struct.ComponentSchema {
  collectionName: 'components_elements_auth_contents';
  info: {
    description: '';
    displayName: 'Auth Form';
  };
  attributes: {
    buttonText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Open App'>;
    loginHint: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'If you already have an account, we will log you in'>;
    registerButtonText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Start Bulk Image Generation'>;
    welcome: Schema.Attribute.Component<'elements.welcome', false>;
  };
}

export interface ElementsBadgeWithStars extends Struct.ComponentSchema {
  collectionName: 'components_elements_badge_with_stars';
  info: {
    displayName: 'BadgeWithStars';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
    star_count: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<5>;
    text: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 20;
      }> &
      Schema.Attribute.DefaultTo<'#1 AI Bulk Generator'>;
  };
}

export interface ElementsFeature extends Struct.ComponentSchema {
  collectionName: 'components_elements_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    description: Schema.Attribute.Text;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    newTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    showLink: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ElementsFeatureColumn extends Struct.ComponentSchema {
  collectionName: 'components_slices_feature_columns';
  info: {
    description: '';
    displayName: 'Feature column';
    icon: 'align-center';
    name: 'FeatureColumn';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsFeatureHero extends Struct.ComponentSchema {
  collectionName: 'components_elements_feature_heroes';
  info: {
    displayName: 'FeatureHero';
  };
  attributes: {
    description: Schema.Attribute.String;
    iconName: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ElementsFeatureRow extends Struct.ComponentSchema {
  collectionName: 'components_slices_feature_rows';
  info: {
    description: '';
    displayName: 'Feature row';
    icon: 'arrows-alt-h';
    name: 'FeatureRow';
  };
  attributes: {
    description: Schema.Attribute.Text;
    link: Schema.Attribute.Component<'links.link', false>;
    media: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsFooterSection extends Struct.ComponentSchema {
  collectionName: 'components_links_footer_sections';
  info: {
    displayName: 'Footer section';
    icon: 'chevron-circle-down';
    name: 'FooterSection';
  };
  attributes: {
    links: Schema.Attribute.Component<'links.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsHeadline extends Struct.ComponentSchema {
  collectionName: 'components_elements_headlines';
  info: {
    displayName: 'Headline';
  };
  attributes: {
    highlighted_text: Schema.Attribute.String;
    main_text: Schema.Attribute.String;
    sub_text: Schema.Attribute.String;
  };
}

export interface ElementsLogos extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logos';
    icon: 'apple-alt';
    name: 'logos';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsNotificationBanner extends Struct.ComponentSchema {
  collectionName: 'components_elements_notification_banners';
  info: {
    description: '';
    displayName: 'Notification banner';
    icon: 'exclamation';
    name: 'NotificationBanner';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.Component<'links.link', false>;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<['alert', 'info', 'warning']> &
      Schema.Attribute.Required;
  };
}

export interface ElementsPlan extends Struct.ComponentSchema {
  collectionName: 'components_elements_plans';
  info: {
    description: '';
    displayName: 'Pricing plan';
    icon: 'search-dollar';
    name: 'plan';
  };
  attributes: {
    description: Schema.Attribute.Text;
    isRecommended: Schema.Attribute.Boolean;
    name: Schema.Attribute.String;
    price: Schema.Attribute.Decimal;
    pricePeriod: Schema.Attribute.String;
    product_features: Schema.Attribute.Relation<
      'oneToMany',
      'api::product-feature.product-feature'
    >;
  };
}

export interface ElementsTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_slices_testimonials';
  info: {
    description: '';
    displayName: 'Testimonial';
    icon: 'user-check';
    name: 'Testimonial';
  };
  attributes: {
    authorName: Schema.Attribute.String & Schema.Attribute.Required;
    picture: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ElementsUseCase extends Struct.ComponentSchema {
  collectionName: 'components_elements_use_cases';
  info: {
    description: '';
    displayName: 'use-case';
    icon: 'brush';
  };
  attributes: {
    bentoSize: Schema.Attribute.Enumeration<['small', 'medium', 'large']>;
    description: Schema.Attribute.Text;
    examples: Schema.Attribute.Media<'images' | 'videos', true> &
      Schema.Attribute.Required;
    identifier: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    temp: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsWelcome extends Struct.ComponentSchema {
  collectionName: 'components_elements_welcomes';
  info: {
    displayName: 'welcome';
  };
  attributes: {
    fallbackName: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Creator'>;
    message: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Welcome back, {name}!'>;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    description: '';
    displayName: 'Footer';
  };
  attributes: {
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
    footerLogo: Schema.Attribute.Component<'layout.logo', false>;
    legalLinks: Schema.Attribute.Component<'links.link', true>;
    menuLinks: Schema.Attribute.Component<'links.link', true>;
    socialLinks: Schema.Attribute.Component<'links.social-link', true>;
  };
}

export interface LayoutLogo extends Struct.ComponentSchema {
  collectionName: 'components_layout_logos';
  info: {
    description: '';
    displayName: 'Logo';
  };
  attributes: {
    logoImg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    logoText: Schema.Attribute.String;
  };
}

export interface LayoutNavbar extends Struct.ComponentSchema {
  collectionName: 'components_layout_navbars';
  info: {
    description: '';
    displayName: 'Navbar';
    icon: 'map-signs';
    name: 'Navbar';
  };
  attributes: {
    button: Schema.Attribute.Component<'links.button-link', false>;
    links: Schema.Attribute.Component<'links.link', true>;
    navbarLogo: Schema.Attribute.Component<'layout.logo', false>;
  };
}

export interface LinksButton extends Struct.ComponentSchema {
  collectionName: 'components_links_simple_buttons';
  info: {
    description: '';
    displayName: 'Button';
    icon: 'fingerprint';
    name: 'Button';
  };
  attributes: {
    text: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface LinksButtonLink extends Struct.ComponentSchema {
  collectionName: 'components_links_buttons';
  info: {
    description: '';
    displayName: 'Button link';
    icon: 'fingerprint';
    name: 'Button-link';
  };
  attributes: {
    newTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['primary', 'secondary']>;
    url: Schema.Attribute.String;
  };
}

export interface LinksLink extends Struct.ComponentSchema {
  collectionName: 'components_links_links';
  info: {
    description: '';
    displayName: 'Link';
    icon: 'link';
    name: 'Link';
  };
  attributes: {
    newTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LinksSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_links_social_links';
  info: {
    description: '';
    displayName: 'Social Link';
  };
  attributes: {
    newTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    social: Schema.Attribute.Enumeration<
      ['YOUTUBE', 'TWITTER', 'DISCORD', 'WEBSITE']
    >;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MetaGoogleBot extends Struct.ComponentSchema {
  collectionName: 'components_meta_google_bots';
  info: {
    description: '';
    displayName: 'Google Bot';
    icon: 'cog';
  };
  attributes: {
    maxImagePreview: Schema.Attribute.Enumeration<
      ['none', 'standard', 'large']
    > &
      Schema.Attribute.DefaultTo<'large'>;
    maxSnippet: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<-1>;
    maxVideoPreview: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<-1>;
  };
}

export interface MetaMetadata extends Struct.ComponentSchema {
  collectionName: 'components_meta_metadata';
  info: {
    description: '';
    displayName: 'Metadata';
    icon: 'robot';
    name: 'Metadata';
  };
  attributes: {
    canonicalUrl: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaKeywords: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    ogDescription: Schema.Attribute.Text;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String;
    robots: Schema.Attribute.Component<'meta.robots', false>;
    structuredData: Schema.Attribute.JSON;
    twitterCard: Schema.Attribute.Component<'meta.twitter-x-card', false>;
    verification: Schema.Attribute.Component<'meta.verification', false>;
  };
}

export interface MetaRobots extends Struct.ComponentSchema {
  collectionName: 'components_meta_robots';
  info: {
    displayName: 'Robots';
    icon: 'alien';
  };
  attributes: {
    follow: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    googleBot: Schema.Attribute.Component<'meta.google-bot', false>;
    index: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface MetaTwitterXCard extends Struct.ComponentSchema {
  collectionName: 'components_meta_twitter_x_cards';
  info: {
    displayName: 'TwitterX Card';
    icon: 'expand';
  };
  attributes: {
    card: Schema.Attribute.Enumeration<['summary', 'summary_large_image']> &
      Schema.Attribute.DefaultTo<'summary_large_image'>;
    creator: Schema.Attribute.String & Schema.Attribute.DefaultTo<'@bulkgen'>;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    image: Schema.Attribute.Media<'files' | 'images'>;
    site: Schema.Attribute.String & Schema.Attribute.DefaultTo<'@bulkgen'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
  };
}

export interface MetaVerification extends Struct.ComponentSchema {
  collectionName: 'components_meta_verifications';
  info: {
    displayName: 'Verification';
  };
  attributes: {
    bing: Schema.Attribute.String;
    google: Schema.Attribute.String;
    yandex: Schema.Attribute.String;
  };
}

export interface SectionsBottomActions extends Struct.ComponentSchema {
  collectionName: 'components_slices_bottom_actions';
  info: {
    description: '';
    displayName: 'Bottom actions';
    icon: 'angle-double-right';
    name: 'BottomActions';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'links.button-link', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsBulkHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_bulk_heroes';
  info: {
    displayName: 'BulkHero';
    icon: 'crown';
  };
  attributes: {
    badge: Schema.Attribute.Component<'elements.badge-with-stars', false>;
    features: Schema.Attribute.Component<'elements.feature-hero', true>;
    headline: Schema.Attribute.Component<'elements.headline', false>;
  };
}

export interface SectionsFeatureColumnsGroup extends Struct.ComponentSchema {
  collectionName: 'components_slices_feature_columns_groups';
  info: {
    displayName: 'Feature columns group';
    icon: 'star-of-life';
    name: 'FeatureColumnsGroup';
  };
  attributes: {
    features: Schema.Attribute.Component<'elements.feature-column', true>;
  };
}

export interface SectionsFeatureRowsGroup extends Struct.ComponentSchema {
  collectionName: 'components_slices_feature_rows_groups';
  info: {
    displayName: 'Feaures row group';
    icon: 'bars';
    name: 'FeatureRowsGroup';
  };
  attributes: {
    features: Schema.Attribute.Component<'elements.feature-row', true>;
  };
}

export interface SectionsFeatures extends Struct.ComponentSchema {
  collectionName: 'components_layout_features';
  info: {
    description: '';
    displayName: 'Features';
  };
  attributes: {
    description: Schema.Attribute.Text;
    feature: Schema.Attribute.Component<'elements.feature', true>;
    heading: Schema.Attribute.String;
  };
}

export interface SectionsHeading extends Struct.ComponentSchema {
  collectionName: 'components_sections_headings';
  info: {
    displayName: 'Heading';
  };
  attributes: {
    description: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_slices_heroes';
  info: {
    description: '';
    displayName: 'Hero';
    icon: 'heading';
    name: 'Hero';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'links.button-link', true>;
    description: Schema.Attribute.String & Schema.Attribute.Required;
    picture: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsLargeVideo extends Struct.ComponentSchema {
  collectionName: 'components_slices_large_videos';
  info: {
    displayName: 'Large video';
    icon: 'play-circle';
    name: 'LargeVideo';
  };
  attributes: {
    description: Schema.Attribute.String;
    poster: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'videos'> & Schema.Attribute.Required;
  };
}

export interface SectionsLeadForm extends Struct.ComponentSchema {
  collectionName: 'components_sections_lead_forms';
  info: {
    description: '';
    displayName: 'Lead form';
    icon: 'at';
    name: 'Lead form';
  };
  attributes: {
    description: Schema.Attribute.Text;
    emailPlaceholder: Schema.Attribute.String;
    location: Schema.Attribute.String;
    submitButton: Schema.Attribute.Component<'links.button', false>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsPricing extends Struct.ComponentSchema {
  collectionName: 'components_sections_pricings';
  info: {
    displayName: 'Pricing';
    icon: 'dollar-sign';
    name: 'Pricing';
  };
  attributes: {
    plans: Schema.Attribute.Component<'elements.plan', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsRichText extends Struct.ComponentSchema {
  collectionName: 'components_sections_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'text-height';
    name: 'RichText';
  };
  attributes: {
    content: Schema.Attribute.RichText;
  };
}

export interface SectionsTestimonialsGroup extends Struct.ComponentSchema {
  collectionName: 'components_slices_testimonials_groups';
  info: {
    description: '';
    displayName: 'Testimonials group';
    icon: 'user-friends';
    name: 'TestimonialsGroup';
  };
  attributes: {
    description: Schema.Attribute.Text;
    testimonials: Schema.Attribute.Component<'elements.testimonial', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsUseCasesSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_use_cases_sections';
  info: {
    description: '';
    displayName: 'Use Cases';
    icon: 'apps';
  };
  attributes: {
    cases: Schema.Attribute.Component<'elements.use-case', true>;
    override: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Popular Use Cases'>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    description: '';
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    description: '';
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    author: Schema.Attribute.String;
    body: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedVideoEmbed extends Struct.ComponentSchema {
  collectionName: 'components_sections_video_embeds';
  info: {
    description: '';
    displayName: 'Video Embed';
  };
  attributes: {
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.auth-content': ElementsAuthContent;
      'elements.badge-with-stars': ElementsBadgeWithStars;
      'elements.feature': ElementsFeature;
      'elements.feature-column': ElementsFeatureColumn;
      'elements.feature-hero': ElementsFeatureHero;
      'elements.feature-row': ElementsFeatureRow;
      'elements.footer-section': ElementsFooterSection;
      'elements.headline': ElementsHeadline;
      'elements.logos': ElementsLogos;
      'elements.notification-banner': ElementsNotificationBanner;
      'elements.plan': ElementsPlan;
      'elements.testimonial': ElementsTestimonial;
      'elements.use-case': ElementsUseCase;
      'elements.welcome': ElementsWelcome;
      'layout.footer': LayoutFooter;
      'layout.logo': LayoutLogo;
      'layout.navbar': LayoutNavbar;
      'links.button': LinksButton;
      'links.button-link': LinksButtonLink;
      'links.link': LinksLink;
      'links.social-link': LinksSocialLink;
      'meta.google-bot': MetaGoogleBot;
      'meta.metadata': MetaMetadata;
      'meta.robots': MetaRobots;
      'meta.twitter-x-card': MetaTwitterXCard;
      'meta.verification': MetaVerification;
      'sections.bottom-actions': SectionsBottomActions;
      'sections.bulk-hero': SectionsBulkHero;
      'sections.feature-columns-group': SectionsFeatureColumnsGroup;
      'sections.feature-rows-group': SectionsFeatureRowsGroup;
      'sections.features': SectionsFeatures;
      'sections.heading': SectionsHeading;
      'sections.hero': SectionsHero;
      'sections.large-video': SectionsLargeVideo;
      'sections.lead-form': SectionsLeadForm;
      'sections.pricing': SectionsPricing;
      'sections.rich-text': SectionsRichText;
      'sections.testimonials-group': SectionsTestimonialsGroup;
      'sections.use-cases-section': SectionsUseCasesSection;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.video-embed': SharedVideoEmbed;
    }
  }
}
