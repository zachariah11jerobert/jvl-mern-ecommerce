class APIFeaturse {
    constructor(query, queryStr){
        this.query = query;
        this.queryStr = queryStr;
    }

    search(){
        let keyword =  this.queryStr .keyword? {
            name: {
                $regex: this.queryStr.keyword,
                $option: 'i'
            }
        }: {};

        this.query.find({...keyword})
        return this;
    }


    filter(){
        const queryStrCopy = {...this.queryStr};
      
        //removing fields from query
        const reemovefields = ['keyword', 'limit', 'page'];
        reemovefields.forEach( field => delete queryStrCopy[field]);

        let queryStr = JSON.stringify (queryStrCopy)
        queryStr = queryStr.replace(/\b(gt|get|lt|lte)/g, match => $`${match}` )

        this.query.find(JSON.parse (queryStr));

        return this;
    }

    paginate(resPerPage){
        const currentPage = Number(this.queryStr.page) || 1;
        const skip = resPerPage * currentPage -1
        this.query.limit(resPerPage).skip(skip);
    }
}

module.exports = APIFeaturse;