import {Injectable} from "@angular/core";

@Injectable()

export class DataTaskListProvider{

  getData(): any[] {
    let data: any[] = [];
    
    for(let i = 0; i < 10; i++) {
      data.push(this._getRandomData());
    }
    
    return data;
  }
  
  getAsyncData(): Promise<any[]> {
    return new Promise(resolve => {
      
      setTimeout(() => {
        resolve(this.getData());
      }, 1000)
      
    });
  }
  
  private _getRandomData() {
    let i = Math.floor(Math.random() * this._data.length);
    
    return this._data[i];
  }
  
  private _data = [
    {
      imgPath: "https://2.bp.blogspot.com/-7S5map7lvcg/WP8GGNXGeaI/AAAAAAAABcs/peVfQ8MG6CMEGIJJJx3InpfbI21JJk45wCLcB/s1600/darth-vader.jpg",
      title: "Darth Vader",
      subTitle: "Don't Know What To Do!",
      description: "I've had a pretty messed up day. If we just...",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      imgPath: "http://2.bp.blogspot.com/-kI6dxwYkdYY/T2IEsxba38I/AAAAAAAAACA/TILbmA7h-xc/s1600/Star-Wars-Episode-One-Phantom-Menace-Yoda1.jpg",
      title: "Master Yoda",
      subTitle: "Don't Know What To Do!",
      description: "I've had a pretty messed up day. If we just...",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      imgPath: "http://3.bp.blogspot.com/-kapnBNUvcCM/T2IFMql9GpI/AAAAAAAAACI/NhhsOrpz210/s1600/Anakin-Skywalker-anakin-skywalker-5760053-621-413.jpg",
      title: "Anakin Skywalker",
      subTitle: "Don't Know What To Do!",
      description: "I've had a pretty messed up day. If we just...",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      imgPath: "http://3.bp.blogspot.com/-5cTfT-cQp9k/T2IHBL9JWMI/AAAAAAAAACQ/jWbrPk4nmDY/s1600/Mace_Windu.jpg",
      title: "Mace Windu",
      subTitle: "Don't Know What To Do!",
      description: "I've had a pretty messed up day. If we just...",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      imgPath: "http://3.bp.blogspot.com/-fXE51oiRklw/T2IIust-O_I/AAAAAAAAACY/LAOJA4_vXXk/s1600/darth_maul_sith_lords_1.jpg",
      title: "Darth Maul",
      subTitle: "Don't Know What To Do!",
      description: "I've had a pretty messed up day. If we just...",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      imgPath: "http://3.bp.blogspot.com/-Loe3poDeo10/T2IKKc4WsaI/AAAAAAAAACg/xg1Q7edukxQ/s1600/Dooku_lightning.jpg",
      title: "Graaf Dooku",
      subTitle: "Don't Know What To Do!",
      description: "I've had a pretty messed up day. If we just...",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      imgPath: "http://3.bp.blogspot.com/-WINTLGAWddc/T2ILjw4xcvI/AAAAAAAAACo/A9X_iL4BbJI/s1600/obi_wan_kenobi_1.jpg",
      title: "Obi-Wan Kenobi (Ben)",
      subTitle: "Don't Know What To Do!",
      description: "I've had a pretty messed up day. If we just...",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      imgPath: "http://2.bp.blogspot.com/-uPbOXGbZMmU/T2IMkazCw9I/AAAAAAAAACw/wVABdRgQ3Gk/s1600/Commander_Cody.jpg",
      title: "Commander Cody",
      subTitle: "Don't Know What To Do!",
      description: "I've had a pretty messed up day. If we just...",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      imgPath: "http://1.bp.blogspot.com/-_bWCZTAyv0M/T2IOdThAbMI/AAAAAAAAAC4/f_EXtf4_-m8/s1600/general_grievous.jpg",
      title: "Generaal Grievous",
      subTitle: "Don't Know What To Do!",
      description: "I've had a pretty messed up day. If we just...",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      imgPath: "http://2.bp.blogspot.com/-RWQpNr1VgII/T2IQhPVIxdI/AAAAAAAAADI/GTto6xFuJF4/s1600/Padme_episodeIII_green.png",
      title: "Senator Amidala (Padmé)",
      subTitle: "Don't Know What To Do!",
      description: "I've had a pretty messed up day. If we just...",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      imgPath: "http://4.bp.blogspot.com/-f3UlCdOHBcM/T2ISR4Erx-I/AAAAAAAAADQ/4-DwqZI8BQY/s1600/SithPalpatine.jpg",
      title: "Kanselier Palpatine (Darth Sidious)",
      subTitle: "Don't Know What To Do!",
      description: "I've had a pretty messed up day. If we just...",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      imgPath: "http://3.bp.blogspot.com/-AD4_WRLJgIQ/T2IT_z5pH7I/AAAAAAAAADY/BonN8Mbxk34/s1600/60645-jar_jar_binks_poster_card_c10227315_large.jpg",
      title: "Jar-Jar Binks",
      subTitle: "Don't Know What To Do!",
      description: "I've had a pretty messed up day. If we just...",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      imgPath: "http://2.bp.blogspot.com/-n8X2egoV84g/T2IVdKISSzI/AAAAAAAAADg/p5Y5vIUN7fg/s1600/JangoFett-OP.jpg",
      title: "Jango Fett",
      subTitle: "Don't Know What To Do!",
      description: "I've had a pretty messed up day. If we just...",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      imgPath: "http://1.bp.blogspot.com/-8EEjq9AFXRw/T2IXPkezuCI/AAAAAAAAADo/EWrcxPPIy8c/s1600/Qui-Goncloseup.jpg",
      title: "Qui-Gonn Jinn",
      subTitle: "Don't Know What To Do!",
      description: "I've had a pretty messed up day. If we just...",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      imgPath: "http://3.bp.blogspot.com/-sWqT3gtAswI/T2Nhj4lUBNI/AAAAAAAAADw/put5HdUbT2w/s1600/Watto.jpg",
      title: "Watto",
      subTitle: "Don't Know What To Do!",
      description: "I've had a pretty messed up day. If we just...",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      imgPath: "http://2.bp.blogspot.com/-RC2OVgaVRS8/T2NjUm_MtnI/AAAAAAAAAD4/0-L2BJA6wsA/s1600/C-3PO_EP5-KEY-469_R_8x10.jpg",
      title: "C-3PO",
      subTitle: "Don't Know What To Do!",
      description: "I've had a pretty messed up day. If we just...",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      imgPath: "http://3.bp.blogspot.com/-hlvSan-Fi-A/T2NlsaOc80I/AAAAAAAAAEA/Ea6ssNW9J9s/s1600/250px-R2d2.jpg",
      title: "R2-D2",
      subTitle: "Don't Know What To Do!",
      description: "I've had a pretty messed up day. If we just...",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      imgPath: "http://3.bp.blogspot.com/-bq_zI7OdgoQ/T2NpXdKuyLI/AAAAAAAAAEI/is0VyWXmoG4/s1600/skywkr_pilot.jpg",
      title: "Luke Skywalker",
      subTitle: "Don't Know What To Do!",
      description: "I've had a pretty messed up day. If we just...",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      imgPath: "http://1.bp.blogspot.com/-ckHLU03xIR0/T2NrZ-Xr2sI/AAAAAAAAAEQ/Q8jaszh9EgE/s1600/leia460_1737057c.jpg",
      title: "Leia Organa (Skywalker)",
      subTitle: "Don't Know What To Do!",
      description: "I've had a pretty messed up day. If we just...",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      imgPath: "http://1.bp.blogspot.com/-tKzxmjmWocs/T2Ns_bhA3PI/AAAAAAAAAEY/rczygJh-IB0/s1600/Han-Solo-006.jpg",
      title: "Han Solo",
      subTitle: "Don't Know What To Do!",
      description: "I've had a pretty messed up day. If we just...",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      imgPath: "http://4.bp.blogspot.com/-v4oaSQ1ItEM/T2NupkTz_4I/AAAAAAAAAEg/5wgOzbqwkUA/s1600/Chewbacca_SWGTCG.jpg",
      title: "Chewbacca",
      subTitle: "Don't Know What To Do!",
      description: "I've had a pretty messed up day. If we just...",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
  ];
}
