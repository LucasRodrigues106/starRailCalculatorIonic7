import { Component, OnInit } from '@angular/core';
import { ICharacter } from 'src/interfaces/ICharacter';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.page.html',
  styleUrls: ['./list-characters.page.scss'],
})
export class ListCharactersPage implements OnInit {

  charactersList: ICharacter[] = [];

  constructor() { }

  async ngOnInit() {
    this.charactersList = await (await fetch('../../assets/characterList.json')).json() as ICharacter[];
    console.log(this.charactersList);
  }

  iconBase64() {
    return "data:image/jpeg;base64,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"
  }

}