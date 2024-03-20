# vn-to-words
Convert numbers to words for popular languages for countries in Asia and Europe including Vietnamese, English, Chinese, Korean, Japanese, French, German, Italian, Spanish, Russian
## Install
```$xslt
npm i vn-to-words
```

## Use 
### Command for dev
Install global

```angular2
npm i -g vn-to-words
```
Run command with parameter to random from 1 to 8
```$xslt
vn-to-words <number>
```
Example Result
```$xslt
1 'Minoan'
2 'Macedonia'
3 'Carthaginian'
4 'Babylonian'
5 'Palmyran'
6 'Hittite'
7 'Egyptian'
8 'Shang'
```
### Develop with interface
Require package
```$xslt
const aoe = require('vn-to-words')
```
Get a country random
```$xslt
aoe.getCountryRandom()
```
Get team random
```$xslt
const teamSize = 8
aoe.getTeamRandom(teamSize)
```
When random can duplicate country. So get team random unique country
```angular2
aoe.getTeamRandomUnique(8)
```

## Render component template
### Use for VUE
Create Vue component example with command
```$xslt
vn-to-wordsdev vue
```
AoeComponent.vue was created. Which is content
```$xslt
<template>
    <div>
        <h5>Giúp đỡ game thủ random quân trong game AOE</h5>
        <div>
            <div class="input-group">
                <input type="text" v-model="teamSize" class="form-control" placeholder="Enter team Size">
                <span class="input-group-btn">
                    <button class="btn btn-primary" @click="onRandomTeam()" type="button">Random</button>
                </span>
            </div><!-- /input-group -->
        </div>
        <table class="table table-bordered">
            <tr>
                <th>Vị trí</th>
                <th>Quân</th>
            </tr>
            <tr v-for="(item, index) in countries" :key="`rd_${index}`">
                <td>
                    {{index + 1}}
                </td>
                <td>
                    {{item}}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    import {getTeamRandom} from 'vn-to-words';

    export default {
        name: "vn-to-words",
        data() {
            return {
                teamSize: 8,
                countries: [],
            };
        },
        mounted() {
            this.onRandomTeam()
        },
        methods: {
            onRandomTeam() {
                this.countries = getTeamRandom(this.teamSize);
            }
        }
    }
</script>

```
### Use for React native
Create React native component example with command
```$xslt
vn-to-wordsdev reactNative
```