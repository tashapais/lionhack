use anchor_lang::prelude::*;
use anchor_spl::token::{TokenAccount, Mint};
use std::str::FromStr;
use spl_token_metadata::state::Metadata;

// Declare the program ID
#[program]
pub mod nft_counter {
    use super::*;

    // Define the count_nfts function with access control ensuring the token account owner matches the user's public key
    #[access_control(ctx.accounts.token_account.owner == ctx.accounts.user.key())]
    pub fn count_nfts(ctx: Context<CountNfts>, creator_address: Pubkey) -> ProgramResult {
        // Get references to the token account and mint
        let token_account = &ctx.accounts.token_account;
        let mint = &ctx.accounts.mint;
        let metadata_address = spl_token_metadata::id();
        // Deserialize the metadata account using the provided AccountInfo
        let metadata_account = Metadata::from_account_info(&ctx.accounts.metadata)?;
        
        // Check if the token is minted by the specified creator address
        if metadata_account.mint == *mint.key && metadata_account.creator.pubkey == creator_address {
            // Increment the amount of tokens in the token account if the condition is met
            token_account.amount = token_account.amount.checked_add(1).unwrap();
        }

        Ok(())
    }

    // Define the account structures required for the count_nfts function
    #[derive(Accounts)]
    pub struct CountNfts<'info> {
        // The user who initiates the transaction (wallet owner)
        #[account(mut)]
        pub user: Signer<'info>,
        // The token account holding the NFTs
        #[account(mut)]
        pub token_account: Account<'info, TokenAccount>,
        // The NFT mint
        #[account(constraint = mint.mint_authority == crate::ID)]
        pub mint: Account<'info, Mint>,
        // The metadata account associated with the NFT
        pub metadata: AccountInfo<'info>,
        // The rent sysvar (used to validate account rent exemption)
        pub rent: Sysvar<'info, Rent>,
        // The system program (used for general account creation)
        pub system_program: Program<'info, System>,
        // The SPL token program (used for token-related instructions)
        pub token_program: Program<'info, Token>,
    }
}

// The main function (required for the Anchor framework)
fn main() {
    // Configure the program's ID
    let program_id = Pubkey::from_str("2E6LJ3m7xU6nK8V7CKiz6F4hMNpvdJF9wn8W7RUuYnvn").unwrap();

    // Define the program deployment configuration
    let mut config = AnchorConfig::default();
    config.provider = Provider::try_from_env().unwrap();
    config.cluster = Cluster::Testnet;

    // Deploy the program
    let program = Program::new(program_id, config.provider, config.workspace);

    program.deploy(
        &config.provider.wallet,
        &AnchorDeployConfig::default(),
        None,
    );
}
/*
Steps we need to do:
Install the Solana CLI tool: curl -sSf https://raw.githubusercontent.com/solana-labs/solana/v1.9.6/install/solana-install-init.sh | sh -s - v1.9.6
Initialize a new Anchor project: anchor init nft-counter
Replace the contents of nft-counter/src/lib.rs with your program code.
Build the program: anchor build
Deploy the program: anchor deploy
After successful deployment, the program's address (i.e., the address of the program's IDL account) will be displayed in the console.


*/