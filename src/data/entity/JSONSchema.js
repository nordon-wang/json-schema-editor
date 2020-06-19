/** 新版JSONSchema一级字段项
 * 【字段属性说明】
 *  type：用于标识字段项的基本数据类型（object、array、string、boolean、number）
 *  title：字段项的label值
 *  properties：存放所有的子字段数据内容
 *  format：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  readOnly：字段项可设置是否可编辑
 *  required：存放所有子字段的key值，用于验证子字段项是否存在，同时required可充当排序功能
 *  propertyOrder：按序存放所有子字段的key值（排序功能）
 * */
export const initJSONSchemaData = {
  type: 'object',
  title: 'jsonSchemaObject',
  properties: {
    func: {
      type: 'object',
      format: 'func',
      title: '功能设置',
      readOnly: true,
      properties: {},
      required: [],
      propertyOrder: [],
    },
    style: {
      type: 'object',
      format: 'style',
      title: '样式设置',
      readOnly: true,
      properties: {},
      required: [],
      propertyOrder: [],
    },
    data: {
      type: 'object',
      format: 'data',
      title: '数据设置',
      readOnly: true,
      properties: {},
      required: [],
      propertyOrder: [],
    },
  },
  required: ['func', 'style', 'data'],
  propertyOrder: ['func', 'style', 'data'],
};
