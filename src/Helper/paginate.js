export default (req, count) => {
    const pageNo = parseInt(req.query.skip > count ? 0 : req.query.skip)
    const pageLimit = parseInt(req.query.limit)
    const sumPageLimit = pageNo + pageLimit
    const diffPageLimit = pageNo - pageLimit
    const nextPage = sumPageLimit > count ? null : `${process.env.BACK_URL}?limit=3&skip=${sumPageLimit}`
    const previousPage = (diffPageLimit) < 0 ? null : `${process.env.BACK_URL}?limit=3&skip=${diffPageLimit}`
    return {pageNo, pageLimit, nextPage, previousPage}
}