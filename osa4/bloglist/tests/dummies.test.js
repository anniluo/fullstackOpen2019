const listhelper = require('../utils/list_helper')

test('dummy returns one', () => {
    const blogs = []
    expect(listhelper.dummy(blogs)).toBe(1)
})