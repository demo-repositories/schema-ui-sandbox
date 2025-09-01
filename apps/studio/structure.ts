import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import {Files, BookA, User, ListCollapse, Quote, Menu, Settings} from 'lucide-react'
import {DefaultDocumentNodeResolver} from 'sanity/structure'
import {EmailPreview} from './schemaTypes/previews/email'

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  if (schemaType === 'emailTemplate') {
    return S.document().views([S.view.form(), S.view.component(EmailPreview).title('Preview')])
  }
  return S.document().views([S.view.form()])
}

export const structure = (S: any, context: any) =>
  S.list()
    .title('Content')
    .items([
      orderableDocumentListDeskItem({
        type: 'page',
        title: 'Pages',
        icon: Files,
        S,
        context,
      }),
      S.listItem()
        .title('Posts')
        .schemaType('post')
        .child(
          S.documentTypeList('post')
            .title('Post')
            .defaultOrdering([{field: '_createdAt', direction: 'desc'}]), // Default ordering
        ),
      orderableDocumentListDeskItem({
        type: 'category',
        title: 'Categories',
        icon: BookA,
        S,
        context,
      }),
      orderableDocumentListDeskItem({
        type: 'author',
        title: 'Authors',
        icon: User,
        S,
        context,
      }),
      orderableDocumentListDeskItem({
        type: 'faq',
        title: 'FAQs',
        icon: ListCollapse,
        S,
        context,
      }),
      orderableDocumentListDeskItem({
        type: 'testimonial',
        title: 'Testimonials',
        icon: Quote,
        S,
        context,
      }),
      S.divider(),
      S.listItem()
        .title('Emails')
        .schemaType('emailTemplate')
        .child(
          S.documentTypeList('emailTemplate')
            .title('Email')
            .defaultOrdering([{field: '_createdAt', direction: 'desc'}]), // Default ordering
        ),
      S.divider(),
      S.listItem()
        .title('Navigation')
        .icon(Menu)
        .child(S.editor().id('navigation').schemaType('navigation').documentId('navigation')),
      S.listItem()
        .title('Settings')
        .icon(Settings)
        .child(S.editor().id('settings').schemaType('settings').documentId('settings')),
    ])
