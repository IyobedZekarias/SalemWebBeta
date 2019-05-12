import React from 'react'
import '../Styles/Wrapper.css';

class Wrapper extends React.Component{
	constructor(){
		super();
		this.state = {
			visibility: false,
			amhLang: true,
		}
	}

	changeVisibility(){ 
		this.setState({visibility: !this.state.visibility});
	}

	toggleAMH = () => {
		this.setState(state => ({amhLang: !state.amhLang}));
	};
	
	render(){
		let visible_className = this.state.visibility ? 'Visibledrop' : 'inVisibledrop';

		const amhTitle = 'ለአዲስ ኪዳን ወንጌላዊት ቤተ ክርስቲያን መሪዎች ጉባኤ';
		const amhBody1 = 'ከሁሉ አስቀድሜ እንደ እግዚአብሔር ፈቃድና ምሪት በመካከላችሁ ተገኝቼ ፍቅራችሁን እንድካፈል የረዳኝንና የመራኝን  ጌታ አመሰግናለሁ። በመቀጠልም የክርስቶስ አካል የሆነችውን ቤተ ክርስቲያንን ከጌታ በተቀበልኩት ፀጋ እንዳገለግል ሁኔታዎችን ስላመቻቻችሁልኝ ጌታ ይባርካችሁ ለማለት እወዳለሁ።';
		const amhBody2 = 'እናንተ ወዳላችሁበት ከተማ እንድመጣ መንፈስ ቅዱስ አነሳስቶኝ ከመጣሁበት ቀን አንስቶ ይህንን ደብዳቤ እስምጽበት ቀን ድረስ ጌታ ብዙ መልካም ነገሮችን አድርጓል።  ከነዚህም መካከል ዋናው በቀጣይነት እንዴት ባለ ሁኔታ የእርሱን መንግት ማገልገል እንደሚገባኝ አቅጣጫን መስጠት ነው። እኔም ከጌታ የተሰጠኝንና ወደፊት የምከተለውን የአገልግሎቴን አቅጣጫ';
		
		const engTitle = 'Rationale of the ministry';
		const engBody1 = 'Jesus commissioned His followers, to go –baptize –teach –disciple nations (Matthew 28:19-20) Hence, SWO is organized with an intention of giving a practical response to the commandment of Jesus. As part and parcel of the response to the great commission, SWO';
		const engBody2 = 'SWO commits itself to work in coordination with all evangelical local churches and ministries here in the United States and the other parts of the world. We are convicted on the importance of coordination and collaboration with other likeminded churches and ministries around the globe to see the desired outcomes in the life of immigrants for the glory of God.';

		return(
			<div class='wrapper'>
				
				<Language 
					amhTitle={amhTitle} 
					amhBody1={amhBody1} 
					amhBody2={amhBody2} 
					engTitle={engTitle} 
					engBody1={engBody1} 
					engBody2={engBody2} 
					amhLang={this.state.amhLang} />

				<div className='LanguageButton' onClick={this.toggleAMH}><p>Switch Language</p></div>

				<section className='Performance'>
					<p id='head'>Community</p>
					<p id='words'>There are many communities around get plugged in</p>


					<div id='drop-down'onClick={this.changeVisibility.bind(this)}>Select A community</div>
					<div id='dropbutton' onClick={this.changeVisibility.bind(this)}></div>
					<div class={visible_className} id='drop'>
						<a href='./index.js'>Ethiopian</a>
						<a href='./index.js'>Ugandan</a>
						<a href='./index.js'>Peruvian</a>
						<a href='./index.js'>Rwandan</a>
						<a href='./index.js'>Brazilian</a>
						<a href='./index.js'>Native American</a>
					</div>
				</section>

			</div>
		);
	}
}

const Language = ({amhTitle, amhBody1, amhBody2, engTitle, engBody1, engBody2, amhLang}) =>
	amhLang ? <div className='InfoText'><p className='title'>{amhTitle}</p><p className='body1'>{amhBody1}</p><p className='body2'>{amhBody2}</p></div> : <div className='InfoText'><p className='title'>{engTitle}</p><p className='body1'>{engBody1}</p><p className='body2'>{engBody2}</p></div>



export default Wrapper

/**/