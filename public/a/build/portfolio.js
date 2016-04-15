var React = require('react');
var ReactDOM = require('react-dom');

var PortfolioComponent = React.createClass({
  render: function() {
    return(
      <div className='portfolio-item portfolio-item-np' id={this.props.width}> 
        <div className='img-layer'>
          <div className='img-layer-info'>
            <div className='img-info-header'>{this.props.header}</div>
            <div className='img-info'>{this.props.liinfo}</div>
          </div>
        </div>
        <img className='inside-img' src={this.props.link} alt={this.props.altlink}></img>
        <a className="portfolio-link" href={this.props.actuallink}>{this.props.altlink}</a>
      </div>
    )
  }
});

var PortfolioComponent_d = React.createClass({
  render: function() {
    return(
      <div className='portfolio-item-phone portfolio-item' id={this.props.width}> 
        <div className='img-layer-phone back'>
          <div className='img-layer-info'>
            <span className='img-info-header'>{this.props.header}</span>
            <div className='img-info'>{this.props.liinfo}</div>
          </div>
        </div>
        <span className="fa fa-2x fa-info-circle portfolio-info-btn portfolio-info-btn-info"></span>
        <img className='inside-img front' src={this.props.link} alt={this.props.altlink}></img>
        <a className="portfolio-link" href={this.props.actuallink}>{this.props.altlink}</a>
      </div>
    )
  }
});

var portfolioinfo = [
  { key: 1, 
    link: 'a/imgs/ajii.png', 
    header: 'Travel Website', 
    altlink: 'www.ajourneyinimages.com',
    actuallink: 'http://www.ajourneyinimages.com',
    liinfo: <ul className='img-info-list'>
              <li className='img-info-list-s'>Website documenting travels through the means of images.</li>
              <li className='img-info-list-s'>Fully responsive website for mobiles, tablets, laptops and PCs.</li>
              <li className='img-info-list-s'>Custom made image slider that can be used with arrows, arrow keys or swipe on mobile and tablet.</li>
              <li className='img-info-list-s'>Designed using HTML, PHP, CSS, Javascript/Jquery and SQL.</li>
            </ul>
  },

  { key: 2,
    link: 'a/imgs/asw.png',
    header: 'Wedding Website',
    altlink: 'www.alexsophiewedding.co.uk',
    actuallink: 'http://www.alexsophiewedding.co.uk',
    liinfo: <ul className='img-info-list'>
              <li className='img-info-list-s'>A wedding invitational website where people can access the website to view information about the wedding and also RSVP to the wedding.</li>
              <li className='img-info-list-s'>Website is password protected with three different passwords for day guests, night guests and the bride and groom. Guests login with the password they were given and can then fill out their RSVP form as well as get information regarding the wedding. The Bride and Groom can log in to another section of the site where they can view all the data concerning the guests RSVP including their meals and whether they can attend.</li>
              <li className='img-info-list-s'>Designed with HTML, CSS, PHP, Javascript/Jquery and SQL.</li>
              <li className='img-info-list-s'>Website is responsive and can be viewed on all mobiles, tablets, laptops and PCs.</li>
            </ul>
  },

  { key: 3,
    link: 'a/imgs/sp.png',
    header: 'Puzzle Website',
    altlink: 'www.simplypuzzle.com',
    actuallink: 'http://www.simplypuzzle.com',
    liinfo: <ul className='img-info-list'>
              <li className='img-info-list-s'>A website consisting of anagram puzzles, odd one out puzzles and math puzzles.</li>
              <li className='img-info-list-s'>Constantly updating with new puzzles, that can be added into the website easily and quickly.</li>
              <li className='img-info-list-s'>Designed with NodeJS, AngularJS, ExpressJS, HTML, CSS</li>
              <li className='img-info-list-s'>Website is responsive and can be viewed on all mobiles, tablets, laptops and PCs.</li>
            </ul>
  }
]

var portfolioItems = portfolioinfo.map(function(port) {return React.createElement(PortfolioComponent, port) })
var portfolioItems_d = portfolioinfo.map(function(port) {return React.createElement(PortfolioComponent_d, port) })

var rootElement = React.createClass({
  render: function() {
    return(

      <div className="portfolio-items">{portfolioItems}</div>
    )
  }
});

var rootElement_d = React.createClass({
  render: function() {
    return(

      <div className="portfolio-items">{portfolioItems_d}</div>
    )
  }
});

ReactDOM.render(React.createElement(rootElement), document.getElementById('pfolio-items'));
ReactDOM.render(React.createElement(rootElement_d), document.getElementById('pfolio-items-d'));
