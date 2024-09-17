class Laptop
{
    constructor(processor, ram) 
    {
        this.processor = processor;
        this.ram = ram;
    }

    PlayGame() 
    {
        console.log(`Prosesor: ${this.processor} dengan Ram: ${this.ram} sedang berjalan.`);
    }
}

class LaptopGaming extends Laptop
{
    constructor(processor, ram, kinerja)
    {
        super(processor, ram);
        this.kinerja = kinerja;
    }
    PlayGame1()
    {
        console.log(`Laptop gaming spek, Processor: ${this.processor} dengan Ram: ${this.ram} berjalan dengan ${this.kinerja}`);
    }
}

const laptop1 = new Laptop('i5G8', '4Gb');
laptop1.PlayGame();

const laptopGaming1 = new LaptopGaming('i9G13', '16GB', 'Baik');
laptopGaming1.PlayGame1();