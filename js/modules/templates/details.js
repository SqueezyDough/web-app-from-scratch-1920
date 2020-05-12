export const layout = `
<article id="{{cardId}}" class="card-details">
    <h1>{{name}}</h1>
    <img src="https://art.hearthstonejson.com/v1/render/latest/enUS/512x/{{cardId}}.png" alt="{{name}}" onerror="this.src='./images/hs-fallback.png'">

    <section>
        <a class="return-link" href=""></a>

        <hgroup>
            <h2>Flavor text</h2>
            <h3>{{flavor}}</h3>
        </hgroup>

        <dl>
            <dt>Class</dt>
            <dd>{{playerClass}}</dd>

            <dt>Card set</dt>
            <dd>{{cardSet}}</dd>

            <dt>Rarity</dt>
            <dd>{{rarity}}</dd>
            
            <dt>Artist</dt>
            <dd>{{artist}}</dd>
        </dl>
    </section>
</article>
`