function songs(arr){
    
    class Songs{
        constructor ( playlist, name, time){
            this.playlist = playlist;
            this.name = name;
            this.time = time;
        }
        typeList(playlist){
            if (this.playlist===playlist||playlist==="all") {
                console.log(this.name);
            }
        }
    }
    
    let playlist = arr[arr.length-1];

    for (let i = 1; i < arr.length-1; i++) {
        let typeList = arr[i].split("_")[0];
        let name = arr[i].split("_")[1];
        let time = arr[i].split("_")[2];
        let songs = new Songs(typeList, name, time);
        songs.typeList(playlist);
    }
}

songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    
    
    )