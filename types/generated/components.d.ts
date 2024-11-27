import type { Schema, Struct } from '@strapi/strapi';

export interface CardCardPrice extends Struct.ComponentSchema {
  collectionName: 'components_card_card_prices';
  info: {
    description: '';
    displayName: 'card Price';
    icon: 'crown';
  };
  attributes: {
    isHighlighted: Schema.Attribute.Boolean;
    maintenance: Schema.Attribute.String;
    performanceFees: Schema.Attribute.String;
    price: Schema.Attribute.Decimal;
    setupCost: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CardCards extends Struct.ComponentSchema {
  collectionName: 'components_card_cards';
  info: {
    description: '';
    displayName: 'card';
    icon: 'apps';
  };
  attributes: {
    button: Schema.Attribute.Component<'cta.button', false>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CtaButton extends Struct.ComponentSchema {
  collectionName: 'components_cta_buttons';
  info: {
    description: '';
    displayName: 'button';
    icon: 'cursor';
  };
  attributes: {
    link: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface QuestionQuestions extends Struct.ComponentSchema {
  collectionName: 'components_question_questions';
  info: {
    description: '';
    displayName: 'question';
    icon: 'question';
  };
  attributes: {
    question: Schema.Attribute.String;
    reply: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SectionsCardSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_card_sections';
  info: {
    description: '';
    displayName: 'Card Section';
    icon: 'apps';
  };
  attributes: {
    cards: Schema.Attribute.Component<'card.cards', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_faq_sections';
  info: {
    displayName: 'FAQ Section';
    icon: 'question';
  };
  attributes: {
    questions: Schema.Attribute.Component<'question.questions', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_sections';
  info: {
    displayName: 'Hero Section';
    icon: 'expand';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    button: Schema.Attribute.Component<'cta.button', false>;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsPriceComparator extends Struct.ComponentSchema {
  collectionName: 'components_sections_price_comparators';
  info: {
    displayName: 'Price Comparator';
    icon: 'crown';
  };
  attributes: {
    description: Schema.Attribute.String;
    priceCards: Schema.Attribute.Component<'card.card-price', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsStatisticsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_statistics_sections';
  info: {
    description: '';
    displayName: 'Statistics Section';
    icon: 'chartCircle';
  };
  attributes: {
    stats: Schema.Attribute.Component<'stat.stats', true>;
  };
}

export interface SectionsStepsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_steps_sections';
  info: {
    description: '';
    displayName: 'Steps Section';
    icon: 'bulletList';
  };
  attributes: {
    steps: Schema.Attribute.Component<'step.steps', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface StatStats extends Struct.ComponentSchema {
  collectionName: 'components_stat_stats';
  info: {
    description: '';
    displayName: 'stat';
    icon: 'chartCircle';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    suffix: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'%'>;
    value: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
  };
}

export interface StepSteps extends Struct.ComponentSchema {
  collectionName: 'components_step_steps';
  info: {
    description: '';
    displayName: 'step';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'card.card-price': CardCardPrice;
      'card.cards': CardCards;
      'cta.button': CtaButton;
      'question.questions': QuestionQuestions;
      'sections.card-section': SectionsCardSection;
      'sections.faq-section': SectionsFaqSection;
      'sections.hero-section': SectionsHeroSection;
      'sections.price-comparator': SectionsPriceComparator;
      'sections.statistics-section': SectionsStatisticsSection;
      'sections.steps-section': SectionsStepsSection;
      'stat.stats': StatStats;
      'step.steps': StepSteps;
    }
  }
}
