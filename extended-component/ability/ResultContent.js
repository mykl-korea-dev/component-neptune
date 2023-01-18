import Component from "../../basic/Component";

export default class ResultContent extends Component {
    constructor(el, data) {
        super(el, data);
        this.$data.store.subscribe(this.render.bind(this));
    }

    setTemplate() {
        const content = this.$element.innerHTML;
        // date
        const timeRegex = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/gm;
        const replacedEndTime = this.$data.store.getState()["ability"][this.$data.top]["ability_end_dttm"].toString().replace(timeRegex, "$1.$2.$3");

        const abilities = this.$data.store.getState()?.['hierarchy']?.[this.$data.top];
        const abilityLength = abilities?.length

        // 결과
        const sortedAbilityScore = [...abilities].sort((first, second) => first["ability_my_score"] > second["ability_my_score"] ? -1 : 1);

        // Gap
        const sortedAbilityGap = [...abilities].sort((first, second) => first["ability_my_gap"] > second["ability_my_gap"] ? -1 : 1);

        // 우선순위
        const sortedAbilityResult = [...abilities].sort((first, second) => first["ability_my_gap"] < second["ability_my_gap"] ? -1 : 1).filter(v => 0 >= v['ability_my_gap']);


        const replacedContent = content.replace("$date", replacedEndTime)
            .replace("$highestAbility", sortedAbilityScore[0]["ability_name"])
            .replace("$highestScore", (+sortedAbilityScore[0]["ability_my_score"]).toFixed(1))
            .replace("$lowestAbility", sortedAbilityScore[abilityLength-1]["ability_name"])
            .replace("$lowestScore", (+sortedAbilityScore[abilityLength-1]["ability_my_score"]).toFixed(1))
            .replace("$highestGapAbility", sortedAbilityGap[0]["ability_name"])
            .replace("$lowestGapAbility", sortedAbilityGap[abilityLength-1]["ability_name"])
            .replace("$recommendAbility", sortedAbilityResult.length <= 3 ? sortedAbilityResult.map(v => v["ability_name"]).join(', ') : sortedAbilityResult.slice(0, 3).map(v => v["ability_name"]).join(', '));
        ;

        return replacedContent;
    }

    render() {
        this.$element.innerHTML = this.setTemplate();
    }
}