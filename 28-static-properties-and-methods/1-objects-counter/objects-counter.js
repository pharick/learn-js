function Article() {
  this.created = new Date();
  Article.count++;
  Article.lastCreated = this.created;
}

Article.count = 0;
Article.getStats = function() {
  return "Всего: " + this.count + ", Последняя: " + this.lastCreated;
};


new Article();
new Article();
console.log( Article.getStats() );
new Article();
console.log( Article.getStats() );
