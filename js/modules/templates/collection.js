export const layout = `
<header>
  <h1>Hearthstone <span>Evergreen</span></h1>
</header>

<ul class="class-list">
{{#Set}}
  {{#Demon Hunter}}
    <li><a href="#{{ClassName}}">{{ClassName}}</a></li>
  {{/Demon Hunter}}
  {{#Druid}}
   <li><a href="#{{ClassName}}">{{ClassName}}</a></li>
  {{/Druid}}
  {{#Hunter}}
   <li><a href="#{{ClassName}}">{{ClassName}}</a></li>
  {{/Hunter}}
  {{#Mage}}
   <li><a href="#{{ClassName}}">{{ClassName}}</a></li>
  {{/Mage}}
  {{#Paladin}}
   <li><a href="#{{ClassName}}">{{ClassName}}</a></li>
  {{/Paladin}}
  {{#Priest}}
   <li><a href="#{{ClassName}}">{{ClassName}}</a></li>
  {{/Priest}}
  {{#Rogue}}
   <li><a href="#{{ClassName}}">{{ClassName}}</a></li>
  {{/Rogue}}
  {{#Shaman}}
   <li><a href="#{{ClassName}}">{{ClassName}}</a></li>
  {{/Shaman}}
  {{#Warlock}}
   <li><a href="#{{ClassName}}">{{ClassName}}</a></li>
  {{/Warlock}}
  {{#Warrior}}
   <li><a href="#{{ClassName}}">{{ClassName}}</a></li>
  {{/Warrior}}
  {{#Neutral}}
   <li><a href="#{{ClassName}}">{{ClassName}}</a></li>
  {{/Neutral}}
{{/Set}}
</ul>

{{#Set}}
{{#Demon Hunter}}
  <article id="{{ClassName}}" class="collection-overview__card">
    <h2 class="collection-overview__card__class-name">{{ClassName}}</h2>
    {{#Collection}}
      <a href="#{{cardId}}">
        <img src="https://art.hearthstonejson.com/v1/render/latest/enUS/512x/{{cardId}}.png" alt="{{name}}" onerror="this.src='./images/hs-fallback.png'">
      </a>  
    {{/Collection}}
  </article>
{{/Demon Hunter}}
{{#Druid}}
  <article id="{{ClassName}}" class="collection-overview__card">
    <h2 class="collection-overview__card__class-name">{{ClassName}}</h2>
    {{#Collection}}
      <a href="#{{cardId}}">
        <img src="https://art.hearthstonejson.com/v1/render/latest/enUS/512x/{{cardId}}.png" alt="{{name}}" onerror="this.src='./images/hs-fallback.png'">
      </a>  
    {{/Collection}}
  </article>
{{/Druid}}

{{#Hunter}}
  <article id="{{ClassName}}" class="collection-overview__card">
    <h2 class="collection-overview__card__class-name">{{ClassName}}</h2>
    {{#Collection}}
    <a href="#{{cardId}}">
      <img src="https://art.hearthstonejson.com/v1/render/latest/enUS/512x/{{cardId}}.png" alt="{{name}}" onerror="this.src='./images/hs-fallback.png'">
    </a> 
    {{/Collection}}
  </article>
{{/Hunter}}

{{#Mage}}
  <article id="{{ClassName}}" class="collection-overview__card">
    <h2 class="collection-overview__card__class-name">{{ClassName}}</h2>
    {{#Collection}}
    <a href="#{{cardId}}">
      <img src="https://art.hearthstonejson.com/v1/render/latest/enUS/512x/{{cardId}}.png" alt="{{name}}" onerror="this.src='./images/hs-fallback.png'">
    </a> 
    {{/Collection}}
  </article>
{{/Mage}}

{{#Paladin}}
  <article id="{{ClassName}}" class="collection-overview__card">
    <h2 class="collection-overview__card__class-name">{{ClassName}}</h2>
    {{#Collection}}
    <a href="#{{cardId}}">
      <img src="https://art.hearthstonejson.com/v1/render/latest/enUS/512x/{{cardId}}.png" alt="{{name}}" onerror="this.src='./images/hs-fallback.png'">
    </a> 
    {{/Collection}}
  </article>
{{/Paladin}}

{{#Priest}}
  <article id="{{ClassName}}" class="collection-overview__card">
    <h2 class="collection-overview__card__class-name">{{ClassName}}</h2>
    {{#Collection}}
    <a href="#{{cardId}}">
      <img src="https://art.hearthstonejson.com/v1/render/latest/enUS/512x/{{cardId}}.png" alt="{{name}}" onerror="this.src='./images/hs-fallback.png'">
    </a> 
    {{/Collection}}
  </article>
{{/Priest}}

{{#Rogue}}
  <article id="{{ClassName}}" class="collection-overview__card">
    <h2 class="collection-overview__card__class-name">{{ClassName}}</h2>
    {{#Collection}}
    <a href="#{{cardId}}">
      <img src="https://art.hearthstonejson.com/v1/render/latest/enUS/512x/{{cardId}}.png" alt="{{name}}" onerror="this.src='./images/hs-fallback.png'">
    </a> 
    {{/Collection}}
  </article>
{{/Rogue}}

{{#Shaman}}
  <article id="{{ClassName}}" class="collection-overview__card">
    <h2 class="collection-overview__card__class-name">{{ClassName}}</h2>
    {{#Collection}}
    <a href="#{{cardId}}">
      <img src="https://art.hearthstonejson.com/v1/render/latest/enUS/512x/{{cardId}}.png" alt="{{name}}" onerror="this.src='./images/hs-fallback.png'">
    </a> 
    {{/Collection}}
  </article>
{{/Shaman}}

{{#Warlock}}
  <article id="{{ClassName}}" class="collection-overview__card">
    <h2 class="collection-overview__card__class-name">{{ClassName}}</h2>
    {{#Collection}}
    <a href="#{{cardId}}">
      <img src="https://art.hearthstonejson.com/v1/render/latest/enUS/512x/{{cardId}}.png" alt="{{name}}" onerror="this.src='./images/hs-fallback.png'">
    </a> 
    {{/Collection}}
  </article>
{{/Warlock}}

{{#Warrior}}
  <article id="{{ClassName}}" class="collection-overview__card">
    <h2 class="collection-overview__card__class-name">{{ClassName}}</h2>
    {{#Collection}}
    <a href="#{{cardId}}">
      <img src="https://art.hearthstonejson.com/v1/render/latest/enUS/512x/{{cardId}}.png" alt="{{name}}" onerror="this.src='./images/hs-fallback.png'">
    </a> 
    {{/Collection}}
  </article>
{{/Warrior}}

{{#Neutral}}
  <article id="{{ClassName}}" class="collection-overview__card">
    <h2 class="collection-overview__card__class-name">{{ClassName}}</h2>
    {{#Collection}}
    <a href="#{{cardId}}">
      <img src="https://art.hearthstonejson.com/v1/render/latest/enUS/512x/{{cardId}}.png" alt="{{name}}" onerror="this.src='./images/hs-fallback.png'">
    </a> 
    {{/Collection}}
  </article>
{{/Neutral}}
{{/Set}}
`